import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function AppCardGenre({ id, genre_ids, media_type }) {

    const { genre } = useContext(GlobalContext)

    if (media_type === 'tv') {
        const prova = genre_ids.filter(element => )
        })
            console.log(prova)
        }


    return(
        <figure>
            <span><strong>Generi Associati :</strong></span>
            <ul>
                {
                    
                    <li></li>
                }
            </ul>
        </figure>
    )
}