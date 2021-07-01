import React, { Component } from 'react'
import Carsvg from './Cars';

export default class Form extends Component {

  state = {
    username: '',
    color:'',
    colors:['', 'blue', 'white', 'red'],
    comment:''
  }

  onChange = ({target}) => {
    this.setState({
      [target.name] : target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`${this.state.username} ${this.state.color} ${this.state.comment}`);
  }


  render() {
    return (
      <div>
        <Carsvg color={this.state.color}  width="306" height="306"/>
        <h1>Commentaire</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={this.state.username} name="username" onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="color">color</label>
            <select name="color" value={this.state.color} onChange={this.onChange}>

              {
                this.state.colors.map((color, index) => {
                  return <option key={index} value={color}>{color}</option>
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comment"></label>
            <textarea name="comment" id="" cols="30" rows="10" value={this.state.comment} onChange={this.onChange}></textarea>
          </div>

          <button type="submit">Valider</button>

        </form>
      </div>
    )
  }
}
