import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function AppFilterGenre() {

    const { genre, setFilterGenre, filterGenre, mediaSearchResults } = useContext(GlobalContext)

    function handleSelect(value) {
        if (value !== 'tutti') {
            const tempFilter = mediaSearchResults.results.filter(element => element.genre_ids.includes(value) )
            setFilterGenre({results: tempFilter})
            console.log(value)
        } else {
            setFilterGenre(...mediaSearchResults)
        }
    }

    return (
        <div className="row">
            <div className="col col-12">
                <select name="" id="" className="" onChange={(e) => handleSelect(parseInt(e.target.value))}>
                    <option value={'tutti'}>Tutti i Generi</option>
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
        </div>
    )

}