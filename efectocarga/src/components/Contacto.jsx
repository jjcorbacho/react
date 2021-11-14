import React from 'react'
import { useState } from 'react'

const Contacto = () => {

    const [titulo, setTitulo] = useState("Este es el primer título de prueba")

        

    return (
        <div>
            <h1> { titulo } </h1>
            <button onClick={() => setTitulo ("Este es el título cambiado")}> Cambiar titulo </button>
            {
                titulo === "Este es el primer título de prueba" ? " Primer título " : " Segundo título "
            }
        </div>
    )
}

export default Contacto
