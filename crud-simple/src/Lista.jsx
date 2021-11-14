import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Lista = () => {

  const [producto, setProducto] = useState("")
  const [productos, setProductos] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const agregarProducto = e => {
    e.preventDefault();
    if(!producto.trim()) {
      setError("no dejar vacio")
      return
    }
    console.log(producto)

    setProductos([
      ...productos,
      {id: nanoid(10), Nombre: producto}
    ])
    setProducto("")
    setError(null)
  }

  const eliminarProducto = id => {
    const arregloFiltrado = productos.filter(item =>item.id !== id)
    setProductos(arregloFiltrado)
  }

  const editar = item => {
    setModoEdicion(true)
    setProducto(item.Nombre)
    setId(item.id)

  }

  const editarProducto = (e) => {
    e.preventDefault()
    if(!producto.trim()) {
      setError("no dejar vacio")
      return
    }
    const arregloEditado = productos.map(item => item.id === id ? {id, Nombre: producto} : item)
    setProductos(arregloEditado)
    setProducto("")
    setModoEdicion(false)
    setId("")
    setError(null)
  }


    return (
        <div className="container mt-5">
        <h1 className="text-center"> Lista de Compras</h1>
        <hr/>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">
            Lista de Productos
            </h4>
            {
              productos.length === 0 ? <li className="list-group-item">No hay Productos registrados</li> : (
              productos.map(item => (
                <ul className="list-group">
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{ item.Nombre }</span>
                  <button className="btn btn-warning btn-sm float-right mx-2"
                  onClick={() => editar(item) }
                  > Editar </button>
                  <button className="btn btn-danger btn-sm float-right"
                  onClick={() => eliminarProducto(item.id)}
                  > Eliminar </button>
                </li>
              </ul>
              )))
            }
              
          </div>
          <div className="col-4">
            <h4 className="text-center">{modoEdicion ? "Modificar Producto" : "Agregar Producto"}</h4>
            <form onSubmit={modoEdicion ? editarProducto : agregarProducto}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input
              type="text"
              className="forms-control mb-2"
              placeholder="Ingrese Producto"
              onChange={ (e) => setProducto(e.target.value)}
              value={producto}
              />
              {
                modoEdicion ? (<button className="btn btn-warning btn-block" type="submit"> Editar </button>) : (<button className="btn btn-dark btn-block" type="submit"> Agregar </button>)
              }
            
            </form>
          </div>
        </div>
      </div>
    )
}

export default Lista
