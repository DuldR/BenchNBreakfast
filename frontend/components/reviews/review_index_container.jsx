import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/review_actions'
import { selectAllReviews } from '../../reducers/selectors'
import ReviewIndex from './review_index'


const mapStateToProps = state => ({
    reviews: selectAllReviews(state),
    loaded: state.ui.loaded.reviewLoading
})

// const mapDispatchToProps = dispatch => ({
//     fetchReviews: (bench) => dispatch(fetchReviews(bench))
// })


export default connect(mapStateToProps, null)(ReviewIndex)