import React, { Component } from 'react';
import Singers from './Singers';

export default class Display extends Component {
  render() {
    return (
      <div>
        <h1>Musiciens</h1>

        <Singers name="R.LEWANDOWSKI" age="32"/>
        <Singers name="E.HAALAND" age="20"/>
        <Singers name="K.MBAPPÉ" age="22"/>
        <Singers name="C.RONALDO" age="36"/>
        <Singers name="L.MESSI" age="33"/>
      </div>
    )
  }
}
