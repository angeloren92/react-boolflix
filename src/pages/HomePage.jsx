import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"
import AppCards from "../components/AppCards"

export default function HomePage() {

  const { envKey, apiUrl } = useContext(GlobalContext)
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
          'total_pages' : data.total_pages,
          'total_results': data.total_results
        })
      })
  }

  return (
    <main>
      <div className="container">
        <form action="" onSubmit={handleSearch}>
          <input type="text" placeholder="Cerca Titolo Film" value={tempSearchMovieTitle} onChange={(e) => setTempSearchMovieTitle(e.target.value)} />
          <select name="" id="" onChange={(e) => setSearchMediaType(e.target.value)}>
            <option value="multi">Film e SerieTV</option>
            <option value="movie">Film</option>
            <option value="tv">SerieTV</option>
          </select>
          <button type="submit">CERCA</button>
        </form>
        <div className="section">
          {
            mediaSearchResults.results.map(element => (
              <AppCards 
              key={element.id} 
              element={element} 
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}