import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'


const Civilizaciones = () => {

    const {id} = useParams()

    const [pueblo, setPueblo] = useState([])

    useEffect(() => {
        const datosdelpueblo = async () => {
            const res = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const data = await res.json()
            setPueblo(data)
    
        }
        datosdelpueblo()
    },[id])

    return (
        <div className="container mt-5">
        <h3>{pueblo.name}</h3>
        <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default Civilizaciones
