import React, { Component } from 'react'
import '../myCss.css'


const titreBleu = {
  fontSize: '50px',
  color: 'blue'
}

export default class Form extends Component {

  render() {

    const myClass =  this.props.head ? 'blue' : 'grey'

    return (
      <div>
        <p style={{fontSize: '50px', color: 'red'}}>Style Inline 1</p>
        <p style={titreBleu}>Style Inline 2</p>
        <p className="purple">Style w class</p>

        <p className={myClass}>Je suis blue ou gris</p>
        <button>Valider</button>
      </div>
    )
  }
}
