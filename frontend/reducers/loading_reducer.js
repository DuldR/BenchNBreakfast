import {
  RECEIVE_BENCHES,
  RECEIVE_ONE_BENCH,
  START_LOADING_ALL_BENCHES,
  START_LOADING_ONE_BENCH
} from '../actions/bench_actions';

import {
  START_LOADING_ALL_REVIEWS
} from '../actions/review_actions'


const initialState = {
  indexLoading: false,
  detailLoading: false,
  reviewLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_ALL_BENCHES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_ONE_BENCH:
      return Object.assign({}, state, {detailLoading: true});
    case START_LOADING_ALL_REVIEWS:
      return Object.assign({}, state, {reviewLoading: true});
    default:
      return state;
  }
};

export default loadingReducer;