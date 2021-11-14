import React,  {useState} from 'react'

const Ejercicio = () => {

    const [producto, setProducto] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [lista, setLista] = useState([])

    const cargandoProductos = (e) => {
        e.preventDefault()

        if(!(producto).trim()) {
            console.log("no dejar vacio producto")
            return
        }

        if(!(descripcion).trim()) {
            console.log("no dejar vacio descripcion")
            return
        }

        console.log("Se estan cargando los productos..." + producto + descripcion)

        setLista([
            ...lista,
            {Nombre: producto, Descripcion: descripcion}
        ])

        e.target.reset()
        setProducto("")
        setDescripcion("")
    }


    return (
        <div className="container mt-5">
        <form onSubmit={cargandoProductos}>
            <input type="text" placeholder="Producto"
                onChange={(e) => setProducto(e.target.value)}
            />
            <input type="text" placeholder="Descripcion" className="mx-3"
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-block"> Agregar </button>
        </form>
        <ul>
            {
                lista.map((item, index) =>(
                    <li key={index}>
                        {item.Nombre} - {item.Descripcion}
                    </li>

                ))
            }
        </ul>

        
        </div>
    )
}

export default Ejercicio
