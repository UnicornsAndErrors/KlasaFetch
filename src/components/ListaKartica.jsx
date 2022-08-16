import React, { Component } from 'react'

export default class ListaKartica extends Component {
  render() {
    const {osobe} = this.props;

    return (
      <div className="card-list">
      {osobe.map((osoba) => (
        <div className="card-container" key={osoba.id}>
          <img src={`https://robohash.org/${osoba.id}?set=set4`} 
          alt={`osoba ${osoba.name}`} 
          />
          <h2>{osoba.name}</h2>
          <p>{osoba.email}</p>
        </div>
            
        
        ))} 
      </div>
    );
  }
}
