import React, { Component, Fragment } from 'react'

export default class Contact extends Component {

  state = {
    show : true
  }

  showContact = () => {
    this.setState({
      show: !this.state.show
    })
  }

  deleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() {
    return (
      <>
        <div className="card card-body mb-3 col-lg-3 col-12">
            <h4>{this.props.pseudo} 
              <i className="fas fa-sort-down" style={{ cursor: 'pointer', color: 'blue'}} onClick={this.showContact}></i>
              <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.deleteClick}></i>
            </h4>

            {
              this.state.show ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Téléphone: {this.props.tel}</li>
                </ul>
              ) : null
            }
        </div>
      </>
    )
  }
}
