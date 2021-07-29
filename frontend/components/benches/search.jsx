import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import FilterForm from './filter_form'
import BenchFormContainer from './bench_form_container'
import BenchShowContainer from './bench_show_container'
import React from 'react'
import { NewRoute } from '/frontend/util/route_util'
import { Route, Switch, Link } from 'react-router-dom'
import BenchForm from './bench_form'
import ReviewFormContainer from '../reviews/review_form_container'

class Search extends React.Component {
    constructor(props) {

        super(props)
    }

    // This fixes the no loading
    componentDidMount() {

        let initBounds = {
          "northEast": {"lat": 37.80971, "lng": -122.39208},
          "southWest": {"lat": 36, "lng":-123}
        }
        this.props.fetchFilter("bounds", initBounds);
    }


    render() {

        
        const {fetchFilter, benches, bounds, maxSeating, minSeating, loaded } = this.props

        if (loaded === false) { return <h1>Loading</h1>}

        return (
            <div>
    
                
                <Route exact path='/' render={(props) => (
                    <section className={"main-index"}>

                        <BenchMap {...props} fetchFilter={fetchFilter} benches={benches} drag={true}/>
                        <div className={"bench-index"}>

                            <FilterForm {...props} fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} />
                            <BenchIndex {...props} bounds={bounds} fetchFilter={fetchFilter} benches={benches}/>

                        </div>
            

                    </section>
                    
                    )}
                />

                <Switch>
              
                    <NewRoute exact={true} path={"/benches/new"} component={BenchFormContainer} />
                    <Route path='/benches/:benchId' component={BenchShowContainer} />

                </Switch>
                
                
            </div>

        )
    }
}

export default Search