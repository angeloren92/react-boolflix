import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HomePage() {

  const { envKey, apiUrl } = useContext(GlobalContext)
  const [tempSearchMovieTitle, setTempSearchMovieTitle] = useState('')
  const [mediaType, setMediaType] = useState('movie')
  const [mediaSearchResults, setMediaSearchResults] = useState({page: 1, results: []})

  function handleSearch(e) {
    e.preventDefault()
    if (tempSearchMovieTitle.length > 1) {
      fetch(`${apiUrl}3/search/${mediaType}?api_key=${envKey}&query=${tempSearchMovieTitle}&page=${mediaSearchResults.page}`)
        .then(response => response.json())
        .then(data => {
          setMediaSearchResults({
            'page' : data.page,
            'results': data.results
          })
          console.log(mediaSearchResults)
        })
    }
  }

  return (
    <main>
      <div className="container">
        <form action="" onSubmit={handleSearch}>
          <input type="text" placeholder="Cerca Titolo Film" value={tempSearchMovieTitle} onChange={(e) => setTempSearchMovieTitle(e.target.value)} />
          <button type="submit">CERCA</button>
        </form>
        <div className="section">
          {
            mediaSearchResults.results.map(element => (
              <ul key={element.id} className="list-unstyled">
                <li>{element.title}</li>
                <li>{element.original_title}</li>
                <li><span className={`fi fi-${element.original_language}`}></span>{element.original_language.toUpperCase()}</li>
                <li>{element.vote_average.toFixed(2)}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </main>
  )
}
