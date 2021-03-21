import React, { Component } from 'react';
import Car from './Car';

class Mycars extends Component {

  noCopy = () => {
    alert('ne pas copier le text !!!');
  }

  addClass = (e) => {
    e.target.classList.toggle('red')
  }

  state = {
    voitures: [ 
      { name: 'Ford', color: 'red', year: 2010 },
      { name: 'Merces', color: 'blue', year: 2020 }],
      title: 'Mon titre 2'
  }

  addYear = () => {
    console.log('activé');

    const updateState = this.state.voitures.map( voiture => voiture.year -= 10 )

    this.setState({
      updateState
    })
  }


  render() {

    const year = new Date().getFullYear();

    return (
    
      <div>
        <h1 onMouseOver={this.addClass}>{ this.state.title }</h1>

        <p onCopy={this.noCopy}>ne pas copier le text !!!</p>

        <button onClick={this.addYear}> + 10 ans </button>

        {
          this.state.voitures.map( (voiture, index) => {

            return (
             <div key={index}>
              <Car year={year - voiture.year} color={voiture.color} name={voiture.name}>  </Car>
             </div>
            )
          })
        }

      </div>

    )
  }
}

export default Mycars;