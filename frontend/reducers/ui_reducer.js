import { combineReducers } from 'redux'

import filters from './filter_reducer'
import loadingReducer from './loading_reducer'


const uiReducer = combineReducers({
    filters,
    loaded: loadingReducer
})

export default uiReducer