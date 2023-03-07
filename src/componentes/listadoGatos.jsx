function listadoGatos(props){
    return(
      <div>
        <div><img src="https://th.bing.com/th/id/OIP.lp2VZXMe35-M1YF57kYJVQHaE7?w=221&h=180&c=7&r=0&o=5&pid=1.7" ></img></div>
        <di><span>Nombre:</span><span>{props.nombre}</span></di>
        <di><span>Edad:</span><span>{props.edad}</span></di>
        <di><span>Raza:</span><span>{props.raza}</span></di>
      </div>
    )
  }

  export default listadoGatos