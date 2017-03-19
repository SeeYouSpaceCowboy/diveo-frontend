import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class LoginPage extends Component {
  constructor() {
      super()

      this.handleSignUpClick = this.handleSignUpClick.bind(this)
  }

  handleSignUpClick(){
    browserHistory.push('/signup')
  }

  render() {
    return (
      <div id="login-center" className="login-wallpaper">
        <div id="login-transparent-background">
        <h1>Log In</h1>

        <div className="ui form">

          <div className="fields">
            <div className="sixteen wide field">
              <label>Username</label>
              <input type="text" placeholder="username"/>
            </div>
          </div>

          <div className="fields">
            <div className="sixteen wide field">
              <label>Password</label>
              <input type="text" placeholder="password"/>
            </div>
          </div>

          <div className="ui submit button">Log In</div>

          <button className="ui button" onClick={ this.handleSignUpClick }>Sign Up</button>
        </div>
        </div>
      </div>
    )
  }
}

export default ( LoginPage )
