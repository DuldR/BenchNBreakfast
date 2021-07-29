import { connect } from 'react-redux'
import BenchForm from './bench_form'
import { createBench } from '../../actions/bench_actions'

const mapStateToProps = (state, { location }) => ({

    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
    
})

const mapDispatchToProps = dispatch => ({

    createBench: bench => dispatch(createBench(bench))

})

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm)

        // let bench = { bench: this.state }
        // const formData = new FormData();

        // formData.append('bench[description]', this.state.description)
        // formData.append('bench[lat]', 37)
        // formData.append('bench[long]', 122)
        // formData.append('bench[seats]', this.state.seats)
        // formData.append('bench[photo]', this.state.photoFile)