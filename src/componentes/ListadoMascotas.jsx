function ListadoMascotas({imagen, nombre, edad, raza}) {
    return (
        <div>
            <div><img src={imagen} alt=""></img></div>
            <div><span>Nombre:</span><span>{nombre}</span></div>
            <div><span>Edad:</span><span>{edad}</span></div>
            <div><span>Raza:</span><span>{raza}</span></div>
        </div>
    )
}

export default ListadoMascotas
