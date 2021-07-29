import { RECEIVE_ONE_REVIEW, RECEIVE_REVIEWS } from './../actions/review_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = {}


    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_ONE_REVIEW:
            return Object.assign({}, state, {[action.review.id]:action.review})
        default:
            return state;
    }
}

export default reviewsReducer