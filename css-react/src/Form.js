import React, { Component } from 'react';
import MyHead from './myHeaderOne';
import './myCss.css';
import styles from './myCss.module.css'; // cibler le composant que nous voulons styliser

const titreBleu = {
  fontSize: '50px',
  color: 'blue'
}

export default class Form extends Component {

  render() {

    const myClass =  this.props.head ? 'blue' : 'grey'

    return (
      <div>
      <h1 className={styles.green}> Title green</h1>
        <MyHead/>
        <p style={{fontSize: '50px', color: 'red'}}>Style Inline 1</p>
        <p style={titreBleu}>Style Inline 2</p>
        <p className="purple">Style w class</p>

        <p className={myClass + ' bigFont'}>Je suis blue ou gris</p>
        <p className={`${myClass} bigFont`}>Je suis blue ou gris 2</p>
        
        <button>Valider</button>
      </div>
    )
  }
}
