import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function AppFilterGenre() {

    const { genre, setFilterMediaGenre, hide, mediaSearchResults, filterMediaGenre } = useContext(GlobalContext)

    function handleSelect(value) {
        if (value !== 0) {
            const tempFilter = mediaSearchResults.results.filter(element => element.genre_ids.includes(value))
            setFilterMediaGenre({ ...mediaSearchResults, results: tempFilter })
        } else if (value === 0) {
            setFilterMediaGenre({ ...mediaSearchResults, results: mediaSearchResults.results })
        }
    }


    return (
        <div className="row">
            {
                filterMediaGenre.results.length === 0 && hide === false && <div className="col col-12"><h1>Nessun Risultato</h1></div>
            }
            {
                hide === false && <div className="col col-12">
                    <select name="" id="" className="" onChange={(e) => handleSelect(parseInt(e.target.value))}>
                        <option value={0}>Tutti i Generi</option>
                        {
                            genre.movie.map(element => (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            ))
                        }
                        {
                            genre.tv.map(element => (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            ))
                        }
                    </select>
                </div>
            }
        </div>
    )
}