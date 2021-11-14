import React from 'react'

const Inicio = () => {

    const [contador, setContador] = React.useState(0)

    const tareas = [
        {id: 1, nombre:"tarea 1"},
        {id: 2, nombre:"tarea 2"},
        {id: 3, nombre:"tarea 3"}
    ]

    const [listas, setListas] = React.useState(tareas)

    const agregarTarea = () => (
        setListas([
            ...listas,
            {id:4, nombre:"tarea 4"}
        ])
    )




    return (
        <div>
            <h1>Esta es la págia de inicio</h1>
            <h2>Este número va aumentando: { contador }</h2>
           <h4>{ contador > 4 ? "es mayor a 4" : "es menor a 4"}</h4>
            <button onClick={()=> setContador(contador +1)}> aumentar </button>

            { listas.map((item) => (
                <h4 key={item.id}>{item.nombre}</h4>
            ))
            
            }
            <button onClick={()=> agregarTarea()}> agregar </button>

        </div>
    )
}

export default Inicio
