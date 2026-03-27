import { createContext, cretateContext } from 'react'
import { useState } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {

    const apiUrl = 'https://api.themoviedb.org/'
    const envKey = import.meta.env.VITE_SECRET_KEY
    const [tempSearchMovieTitle, setTempSearchMovieTitle] = useState('')
    const [searchMediaType, setSearchMediaType] = useState('multi')
    const [mediaSearchResults, setMediaSearchResults] = useState({ page: 1, results: [] })

    function handleSearch(e) {
        e.preventDefault()
        fetch(`${apiUrl}3/search/${searchMediaType}?api_key=${envKey}&query=${tempSearchMovieTitle}&page=${mediaSearchResults.page}`)
            .then(response => response.json())
            .then(data => {
                setMediaSearchResults({
                    'page': data.page,
                    'results': data.results.filter(element => element.media_type !== 'person'),
                    'total_pages': data.total_pages,
                    'total_results': data.total_results
                })
            })
    }

    return (
        <GlobalContext.Provider
            value={{
                tempSearchMovieTitle,
                setTempSearchMovieTitle,
                searchMediaType,
                setSearchMediaType,
                handleSearch,
                mediaSearchResults,
                apiUrl,
                envKey
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}