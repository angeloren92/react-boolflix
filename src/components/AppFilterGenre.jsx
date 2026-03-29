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
        <div className="row py-4">
            {
                hide === false && 
                <div className="col col-12 d-flex justify-content-end">
                    <select name="genreFilter" id="genreFilter" className="btn btn-outline-light mb-1 text-start" 
                    onChange={(e) => handleSelect(parseInt(e.target.value))}>
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
            {
                filterMediaGenre.results.length === 0 && hide === false && <div className="col col-12"><h1>Nessun Risultato</h1></div>
            }
        </div>
    )
}