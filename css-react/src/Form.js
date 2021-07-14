import React, { Component } from 'react';
import MyHead from './myHeaderOne';
import './myCss.css';
import styles from './myCss.module.css'; // cibler le composant que nous voulons styliser
import styled from 'styled-components';

const titreBleu = {
  fontSize: '50px',
  color: 'blue'
}

const Title = styled.h2`
color: purple;
font-size: 80px;
`;

const Btn = styled.button`
padding: 7px;
background-color: purple;
border-radius: 5px;
border: 0;
color: white;
margin-bottom:20px;
`

export default class Form extends Component {

  render() {

    const myClass =  this.props.head ? 'blue' : 'grey'

    return (
      <div>
        <Title>
          styled-components
        </Title>
        <Btn>
          Btn styled-components
        </Btn>
        
        <h1 className={styles.green}> Title green</h1>
        <MyHead/>
        <p style={{fontSize: '50px', color: 'red'}}>Style Inline 1</p>
        <p style={titreBleu}>Style Inline 2</p>
        <p className="purple">Style w class</p>

        <p className={myClass + ' bigFont'}>Je suis blue ou gris</p>
        <p className={`${myClass} bigFont`}>Je suis blue ou gris 2</p>
        
        <button className="btn btn-danger">Btn style boostrap</button>

      </div>
    )
  }
}
