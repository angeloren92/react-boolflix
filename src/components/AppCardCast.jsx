import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function AppCardCast({ id, media_type }) {

    const []
    console.log(media_type)

    const { apiUrl, envKey } = useContext(GlobalContext)

    function handleCast(e) {
        e.preventDefault()
        fetch(`${apiUrl}3/${id}}/${media_type}?api_key=${envKey}`)
            .then(response => response.json())
            .then(data => {
                setMediaSearchResults({
                    'page': data.page
                })
            })
    }

    return (
        <>
            {id}
        </>
    )
}
