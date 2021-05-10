import React, { Component } from 'react'

export default class Contact extends Component {

  state = {
    show : true
  }

  showContact = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <div className="card card-body mb-3">
            <h4>{this.props.pseudo} <i className="fas fa-sort-down" onClick={this.showContact}></i></h4>

            {
              this.state.show ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Téléphone: {this.props.tel}</li>
                </ul>
              ) : null
            }
            
          </div>
      </div>
    )
  }
}
