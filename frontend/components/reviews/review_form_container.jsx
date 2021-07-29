
import ReviewForm from './review_form'
import { connect } from 'react-redux'
import { createReview } from '../../actions/review_actions'
import * as Selectors from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => ({
    bench: state.entities.benches[ownProps.match.params.benchId],
    user: Selectors.selectAllUsers(state)[0]
})

const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)