import React from 'react';

const Car = ({children, color}) => {

  const colorInfo = color ? (<p>Couleur : { color }</p>) : ( <p>Couleur : Néant</p>)

  if(children) {
    return (
      <div className="container__car">
        <h1>Voiture</h1>
        <p> Marque: { children }</p>
        { colorInfo }
      </div>
    )
  } else {
    return (
      <div className="container__car">
        <p>Pas de data</p>
      </div>
    )
  }

}

export default Car;