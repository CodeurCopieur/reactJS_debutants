const Enfant = props => {

  console.log(props);

  const btnReponse = props.ordreMaman.messageMaman !== null ? (<button onClick={props.reponseFunc}>Réponse</button>) : (<button disabled>Réponse</button>)

  return (
    <div>
      <h1>{props.name}(enfant)</h1>
      {btnReponse}
      <p>{props.ordreMaman.messageEnfant}</p>
    </div>
  )

}

export default Enfant;