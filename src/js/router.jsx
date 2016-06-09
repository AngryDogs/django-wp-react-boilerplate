import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Register from './pages/RegisterPage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Register}>
    </Route>
  </Router>
)
