import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HomePage() {

  const { envKey, apiUrl } = useContext(GlobalContext)
  const [tempSearchMovieTitle, setTempSearchMovieTitle] = useState('')
  const [mediaType, setMediaType] = useState('multi')
  const [mediaSearchResults, setMediaSearchResults] = useState({ page: 1, results: [] })

  console.log(mediaSearchResults)

  function handleSearch(e) {
    e.preventDefault()
    fetch(`${apiUrl}3/search/${mediaType}?api_key=${envKey}&query=${tempSearchMovieTitle}&page=${mediaSearchResults.page}`)
      .then(response => response.json())
      .then(data => {
        setMediaSearchResults({
          'page': data.page,
          'results': data.results
        })
      })
  }

  function handleCoutryCode(language) {
    switch (language) {
      case 'en': return 'us';
      case 'ja': return 'jp';
      case 'zh': return 'cn';
      case 'ko': return 'kr';
      case 'cs': return 'cz';
      default: return language;
    }
  }

  return (
    <main>
      <div className="container">
        <form action="" onSubmit={handleSearch}>
          <input type="text" placeholder="Cerca Titolo Film" value={tempSearchMovieTitle} onChange={(e) => setTempSearchMovieTitle(e.target.value)} />
          <select name="" id="" onChange={(e) => setMediaType(e.target.value)}>
            <option value="multi">Film e SerieTV</option>
            <option value="movie">Film</option>
            <option value="tv">SerieTV</option>
          </select>
          <button type="submit">CERCA</button>
        </form>
        <div className="section">
          {
            mediaSearchResults.results.map(({id, name, original_language, original_name, title, original_title, vote_average}) => (
              <ul key={id} className="list-unstyled">
                <li>{title || name}</li>
                <li>{original_title || original_name}</li>
                <li><span className={`fi fi-${handleCoutryCode(original_language)}`}></span></li>
                <li>{vote_average}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </main>
  )
}
