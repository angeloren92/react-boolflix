import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function AppCardCast({ id, media_type, genre_ids }) {

    const [cast, setCast] = useState([])

    console.log(cast)

    const { apiUrl, envKey } = useContext(GlobalContext)


    useEffect(() => {
        fetch(`${apiUrl}3/${media_type}/${id}/credits?api_key=${envKey}`)
            .then(response => response.json())
            .then(data => {
                const filteredCast = data.cast.map(element => element.name)
                setCast(filteredCast.slice(0, 5))
            })
    }, [id])


    return (
        <>
            <ul>
                {
                    cast.map(element => (
                        <li>{element}</li>
                    ))
                }
            </ul>
        </>
    )
}
