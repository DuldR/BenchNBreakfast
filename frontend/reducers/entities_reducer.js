import { combineReducers } from 'redux'

import usersReducer from './users_reducer'
import benchesReducer from './benches_reducer'
import reviewsReducer from './review_reducers'




const entitiesReducer = combineReducers({
    users: usersReducer,
    benches: benchesReducer,
    reviews: reviewsReducer

})

export default entitiesReducer;