import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="ui fluid search">
        <div className="ui icon input">
          <input onChange={ this.handleSearchInput } className="prompt" type="text" placeholder="Search..."/>
          <i className="search link icon"></i>
        </div>

        <div className="results"></div>
      </div>
    );
  }
}

export default Search
