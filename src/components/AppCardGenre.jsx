import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function AppCardGenre({ genre_ids, media_type }) {

    const { genre } = useContext(GlobalContext)
    let findedGenre = []

    if (media_type === 'movie') {
        findedGenre = genre_ids.map(element => {
            return genre.movie.find(item => item.id === element ? item.name : null)
        })
    } else if (media_type === 'tv') {
        findedGenre = genre_ids.map(element => {
            return genre.tv.find(item => item.id === element ? item.name : null)
        })
    }

    return(
        <figure>
            <span><strong>Generi Associati :</strong></span>
            <ul>
                {
                    findedGenre.map(element => (
                        <li key={element.id}>{element.name}</li>
                    ))
                }
            </ul>
        </figure>
    )
}