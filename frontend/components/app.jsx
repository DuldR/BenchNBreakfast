import React from "react";
import { Route } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import GreetingContainer from './home/greeting_container'
import SignUpFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'
import SearchContainer from './benches/search_container'
import BenchFormContainer from './benches/bench_form_container'

const App = () => (
  <div>
      <header>
          <h1>⾬</h1>
          <GreetingContainer />    
      </header>

      <div className="main-container">

        <AuthRoute path={"/signup"} exact={true} component={SignUpFormContainer} />
        <AuthRoute path={"/login"} exact={true} component={LoginFormContainer} />
        <ProtectedRoute path={"/"} component={SearchContainer} />

      </div>
      
    
  </div>
);

export default App;