import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import { Root } from './components/root'

// import * as userUtil from '../frontend/util/util_users' 
// import * as sessionUtil from '../frontend/util/util_sessions' 
// import * as api from '../frontend/util/session_api_util'
// import * as api from '../frontend/util/util_benches'
import * as api from '../frontend/util/util_reviews'

// import * as sessions from '../frontend/actions/session_actions'
// import * as bench from '../frontend/actions/bench_actions'
// import * as filter from '../frontend/actions/filter_actions'
import * as review from '../frontend/actions/review_actions'



// Test
// window.makeUser = userUtil.createUser

// window.makeSession = sessionUtil.createSession
// window.logout = sessionUtil.destroySession

window.api = api;
window.review = review
// window.sessions = sessions
// window.bench = bench
// window.filter = filter


// Test

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store}/>, root);


  // Test
  window.store = store
  // Test

});