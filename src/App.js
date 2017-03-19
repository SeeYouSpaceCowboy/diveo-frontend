import React, { Component } from 'react'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='ui container body-container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App
