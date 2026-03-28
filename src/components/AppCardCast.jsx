import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"

export default function AppCardCast({ id, media_type }) {

    const { apiUrl, envKey } = useContext(GlobalContext)
    const [cast, setCast] = useState([])
    
    fetch(`${apiUrl}3/${media_type}/${id}/credits?api_key=${envKey}`)
    .then(response => response.json())
    .then(data => {
        const filteredCast = data.cast.map(element => {
                return { 'name': element.name, 'idCast': element.id }
            })
            setCast(filteredCast.slice(0, 5))
        })  

    return (
        <figure>
            <span><strong>Cast: </strong></span>
            <ul>
                {
                    cast.map(element => (
                        <li key={element.idCast}>{element.name}</li>
                    ))
                }
            </ul>
        </figure>
    )
}
