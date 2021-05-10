import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {

  state = {
    contacts: [
      {
        id: 1,
        pseudo: "Codwerk",
        email:"codwerk@live.fr",
        tel: '000-000-00'
      },
      {
        id: 2,
        pseudo: "Codraw",
        email:"codraw@live.fr",
        tel: '111-111-11'
      },
      {
        id: 3,
        pseudo: "Codrive",
        email: "codrivek@live.fr",
        tel: '222-222-22'
      }
    ]
  }
  render() {
    return (
      <div>
          {
            this.state.contacts.map( contact => {
              return (
                <Contact
                  key={contact.id}
                  pseudo={contact.pseudo}
                  email={contact.email}
                  tel={contact.tel}
                />
              )
            })
          }
      </div>
    )
  }
}
