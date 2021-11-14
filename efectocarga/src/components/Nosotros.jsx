import React from 'react'
import { useEffect, useState } from 'react'

const RickMorty = () => {
    const [equipo, setEquipo] = useState([])
    useEffect(() => {
        obtenerDatos()
    }, [])
   const obtenerDatos = async () => {
       const data = await fetch('https://rickandmortyapi.com/api/character')
       const users = await data.json()
       setEquipo(users.results)
   }
    return (
        <div className="container mt-5">
        <div className="row">
        {equipo.map(item => (
            <div className="card" style={{width: 250}} key={item.id}>
                <img src={item.image} className="card-img-top" alt="..."  />
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    <ul className="card-list">
                        <li>{item.species}</li>
                        <li>{item.gender}</li>
                        <li>{item.origin.name}</li>
                    </ul>
                </p>
                </div>
            </div>))}
        </div>
        </div>
    )
}
export default RickMorty
