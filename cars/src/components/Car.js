import React from 'react';

const Car = ({color, year, name}) => {

  const colorInfo = color ? (`${ color }`) : ('Couleur : Néant');

  if(name) {
    return (
      <div className="container__car">
        <h1>Voiture</h1>
        <p> Marque: { name }</p>
        <p> Age: { year } ans</p>
        <p>Couleur : { colorInfo } </p>
      </div>
    )
  } else {
    return null
  }

}

export default Car;