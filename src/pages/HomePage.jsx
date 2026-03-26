import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HomePage() {

  const { envKey, apiUrl } = useContext(GlobalContext)
  const [tempSearchMovieTitle, setTempSearchMovieTitle] = useState('')
  const [mediaType, setMediaType] = useState('movie')
  const [mediaSearchResults, setMediaSearchResults] = useState([])
  console.log(mediaSearchResults)

  useEffect(() => {
    if (tempSearchMovieTitle.length >= 3) {
      fetch(`${apiUrl}3/search/${mediaType}?api_key=${envKey}&query=${tempSearchMovieTitle}`)
        .then(response => response.json())
        .then(data => {
          setMediaSearchResults(data.results)
        })
    }
  }, [tempSearchMovieTitle])

  function handleSearch(e) {
    e.preventDefault()

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
            mediaSearchResults.map(element => (
              <ul key={element.id} className="list-unstyled">
                <li>{element.title}</li>
                <li>{element.original_title}</li>
                <li>{element.original_language}</li>
                <li>{element.vote_average}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </main>
  )
}
