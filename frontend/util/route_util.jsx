import React from "react"
import { Route, withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Component } from "react";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const ProRoute = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const CreateRoute = ({ component: Component, path, exact}) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      // console.log(props.location.search.length)

      props.location.search.length === 0 ? <Redirect to='/' /> : <Component {...props} />
    }
  />
)

// <Redirect from="/benches/new" to="/" />

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(ProRoute)
);

export const NewRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(CreateRoute)
);