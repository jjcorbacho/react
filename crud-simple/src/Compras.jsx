import React, {useState} from "react";
import {nanoid} from "nanoid";

const Compras = () => {

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
            {id: nanoid(5), Nombre: producto}
        ])

        setProducto("")
        setError(null)
    }

    const eliminarProducto = id => {
        const arreglofiltrado = productos.filter(item => item.id !==id)
        setProductos(arreglofiltrado)

    }

    const editar = item => {
        console.log(item)
        setModoEdicion(true)
        setProducto(item.Nombre)
        setId(item.id)
        setError(null)
    }

    const editarProducto = e => {
        e.preventDefault();
        if(!producto.trim()) {
            setError("no dejar vacio")
            return
        }

        const arregloEditado = productos.map(item => item.id === id ? {id, Nombre: producto} : item)
        setProductos(arregloEditado)

        setModoEdicion(false)
        setProducto("")
        setId("")
        setError(null)
        
        }

    
    return (
    <div className="container mt-5">
    <h4 className="text-center">Lista de Compras</h4>
    <div className="row">
        <div className="col-8">
            <h4 className="text-center">Productos</h4>
            <ul className="list-group">
            {

                productos.length === 0 ? (<li className="list-group-item"><span className="lead">No hay Productos</span></li>) 
                : (productos.map(item => (
                    <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.Nombre}</span>
                    <button className="btn btn-warning btn-sm float-right mx-2"
                    onClick={() => editar(item)}> Editar</button>
                    <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => eliminarProducto(item.id)}> Eliminar</button>
                </li>

                )))
                
            }
            </ul>
        </div>
        <div className="col-4">
        {
            modoEdicion ? (<h4 className="text-center">Editar producto</h4>) : (<h4 className="text-center">Agregar Producto</h4>)
        }
        
        <form onSubmit={
            
            modoEdicion ? editarProducto :  agregarProducto }>
            { error ? <h2 className="text-center text-danger">{error}</h2> : null}
            <input type="text"
            className="form-control"
            placeholder="Ingrese Producto"
            onChange={ (e) => setProducto(e.target.value)}
            value={producto}
            />
             {
                modoEdicion ?
                ( <button className="btn btn-warning btn-block mt-2" type="submit"> Editar </button>) 
                : 
                (<button className="btn btn-dark btn-block mt-2" type="submit"> Agregar </button>)
            }
            
        </form>
        </div>
    </div>
    
      
    </div>
  );
};

export default Compras;
