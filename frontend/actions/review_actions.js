import * as APIUtil from '../util/util_reviews'


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_ONE_REVIEW = "RECEIVE_ONE_REVIEW"
export const START_LOADING_ALL_REVIEWS = "START_LOADING_ALL_REVIEWS"


export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const receiveOneReview = (review) => {
    return {
        type: RECEIVE_ONE_REVIEW,
        review
    }
}

export const startLoadingAllReviews = () => ({
    type: START_LOADING_ALL_REVIEWS
});


export const fetchReviews = (bench) => (dispatch) => {
    return APIUtil.getReviews(bench).then(reviews => {
        dispatch(receiveReviews(reviews))
        dispatch(startLoadingAllReviews())
    })
}

export const createReview = (review) => (dispatch) => {
    return APIUtil.createReview(review).then(
        review => {
            dispatch(receiveOneReview(review))
            return review
        }
    )
}