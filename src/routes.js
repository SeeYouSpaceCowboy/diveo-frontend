import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import LoginPage from './components/loginPage'
import signupPage from './components/signupPage'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ App } onEnter={ requireAuth } />
    <Route path='/login' component={ LoginPage }/>
    <Route path='/signup' component={ signupPage }/>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) replace({ pathname: '/login' })
}
