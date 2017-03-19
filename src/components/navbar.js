import React, { Component } from 'react'
import Search from './search'
import Logout from './logout'

class Navbar extends Component {
  render() {
    if(!sessionStorage.jwt) return null

    return (
      <div className="ui secondary  menu">
        <a className="item">
          <img src="../play.ico" alt="logo"/>
        </a>

        <div className="right menu">
          <div className="item">
            <Search />
          </div>

          <a className="item">About</a>

          <a className="ui item">
            <Logout />
          </a>
        </div>
      </div>
    )
  }
}

export default (Navbar)
