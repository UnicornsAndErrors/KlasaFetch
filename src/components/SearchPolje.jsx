import React, { Component } from 'react'

export default class SearchPolje extends Component {
  render() {
    return (
    <input 
    type="search" 
    placeholder="pretraži" 
    className="search-box" 
    onChange={this.props.onFilterChange} /* this props kada zovemo nesto iz app.jsx */
    /> 
    );
  }
}
