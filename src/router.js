import React from 'react'
import { Router, Route } from 'dva/router'
import IndexPage from './routes'
import CountPage from './routes/CountPage/CountPage'

import Users from './routes/Users/Users'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="count" component={CountPage} />
      <Route path="/users" component={Users} />
    </Router>
  )
}

export default RouterConfig
