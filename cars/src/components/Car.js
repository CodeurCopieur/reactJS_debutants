import React from 'react';

const Car = ({color, year, name}) => {

  const colorInfo = color ? (<p>Couleur : { color }</p>) : ( <p>Couleur : Néant</p>)

  if(name) {
    return (
      <div className="container__car">
        <h1>Voiture</h1>
        <p> Marque: { name }</p>
        <p> Age: { year } ans</p>
        { colorInfo }
      </div>
    )
  } else {
    return null
  }

}

export default Car;