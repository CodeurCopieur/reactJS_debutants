const Singers = ({name, age}) => {


  // const {name, age} = props; destructuring a l'intérieur de la fonction
  // const {name, age} = this.props; destructuring a l'intérieur de la classe(si  c'est une class)

  return (
    <div>
      Chanteur : {name} - {age} ans
    </div>
  )
}

export default Singers;