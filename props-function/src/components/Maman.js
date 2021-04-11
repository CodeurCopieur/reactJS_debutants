import React, { Component } from "react";
import Enfant from "./Enfant";

class Maman extends Component {

  state = {
    messageMaman: null,
    messageEnfant: null
  }

  ordreMaman = () => {
    this.setState({
      messageMaman: "va ranger ta chambre !"
    })
  }

  ordreEnfant = () => {
    this.setState({
      messageEnfant: "oui maman !"
    })
  }

  render() {
    return (
      <div>
        <h1>c'est Maman !</h1>
        <button onClick={this.ordreMaman}>Maman a dit :</button>

        <p>{ this.state.messageMaman }</p>

        <Enfant name="Codwerk" ordreMaman={this.state} reponseFunc={this.ordreEnfant}></Enfant>
      </div>
    )
  }
}

export default Maman;