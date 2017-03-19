import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class signupPage extends Component {
  constructor() {
    super()

    this.handleLogInClick = this.handleLogInClick.bind(this)
  }

  handleLogInClick() {
    browserHistory.push('/login')
  }

  render() {
    return (
      <div id="login-center">
        <div id="login-transparent-background">
        <h1>Sign Up</h1>

        <div className="ui form">
          <div className="fields">
            <div className="eight wide field">
              <label>First name</label>
              <input type="text" placeholder="First Name"/>
            </div>

            <div className="eight wide field">
              <label>Last name</label>
              <input type="text" placeholder="Last Name"/>
            </div>
          </div>

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

          <div className="fields">
            <div className="sixteen wide field">
              <label>Password Confirmation</label>
              <input type="text" placeholder="password confirmation"/>
            </div>
          </div>

          <div className="ui submit button">Sign Up</div>

          <button className="ui button" onClick={ this.handleLogInClick }>Log In</button>
        </div>
        </div>
      </div>
    )
  }
}

export default ( signupPage )
