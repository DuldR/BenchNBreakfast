import { connect } from 'react-redux'
import BenchShow from './bench_show'
import { toObj } from '/frontend/reducers/selectors'
import * as Bench from '../../actions/bench_actions'
import * as Review from '../../actions/review_actions'


const mapStateToProps = (state, ownProps) => ({
    // NOT CORRECT
    // bench: toObj(state.entities.benches)[ownProps.match.params.benchId],
    bench: state.entities.benches[ownProps.match.params.benchId],
    loaded: state.ui.loaded.detailLoading


})

const mapDispatchToProps = dispatch => ({

    fetchBench: (bench) => dispatch(Bench.fetchOneBench(bench)),
    fetchReviews: (bench) => dispatch(Review.fetchReviews(bench))

})

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow)