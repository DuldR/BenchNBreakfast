import React from 'react'
import { BenchIndexItem } from './bench_index_item'



class BenchIndex extends React.Component {

    constructor(props) {
        super(props)

        
    }



    componentDidMount() {

        this.props.fetchFilter("bounds", this.props.bounds)

    }
    




    render() {

        // if (Object.entries(this.props.benches).length === 0) { return <h1> Loading </h1>}
        if (this.props.benches === undefined) { return <h1> Loading </h1>}

        const listBenches = this.props.benches.map((bench, idx) => {
            return <BenchIndexItem benchId={bench.id} desc={bench.description} lat={bench.lat} long={bench.long} seats={bench.seats} key={"bench-item-" + idx}/>
        })



        return (
            <section>
                <ul>
                    {listBenches}
                </ul>
            </section>
        )
    }
}

export default BenchIndex