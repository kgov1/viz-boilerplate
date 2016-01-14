import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

import App from './components/App'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

ReactDOM.render(
  <Router history={createHashHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='about' component={AboutPage} />
    </Route>
  </Router>,
  document.getElementById('root')
)
