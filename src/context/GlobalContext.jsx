import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {

    const apiUrl = 'https://api.themoviedb.org/'
    const envKey = import.meta.env.VITE_SECRET_KEY
    const [tempSearchMovieTitle, setTempSearchMovieTitle] = useState('')
    const [searchMediaType, setSearchMediaType] = useState('multi')
    const [mediaSearchResults, setMediaSearchResults] = useState(null)
    const [genre, setGenre] = useState({movie: [], tv:[]})
    const [filterGenre, setFilterGenre] = useState({ page: 1, results: [] })

    function handleSearch(e) {
        e.preventDefault()
        fetch(`${apiUrl}3/search/${searchMediaType}?api_key=${envKey}&query=${tempSearchMovieTitle}`)
            .then(response => response.json())
            .then(data => {
                setMediaSearchResults(data)
                setFilterGenre({
                    'page': data.page,
                    'results': data.results.filter(element => element.media_type !== 'person'),
                    'total_pages': data.total_pages,
                    'total_results': data.total_results
                })
            })
    }

    useEffect(() => {
        fetch(`${apiUrl}3/genre/movie/list?api_key=${envKey}`)
            .then(response => response.json())
            .then(data => {
                setGenre(prevGenre => ({...prevGenre, movie: data.genres}))
            })
        fetch(`${apiUrl}3/genre/tv/list?api_key=${envKey}`)
            .then(response => response.json())
            .then(data => {
                setGenre(prevGenre => ({...prevGenre, tv: data.genres}))
            })
    }, [])

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
                envKey,
                genre,
                filterGenre,
                setFilterGenre
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}