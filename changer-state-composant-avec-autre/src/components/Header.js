import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">Liste de Contacts</a>
          </div>
          <ul className="navbar-nav mr-auto">
            <a href="/" className="nav-link">Accueil</a>
          </ul>
        </nav>
    )
  }
}
