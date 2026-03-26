import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"

export default function HomePage() {
  
  const {envKey} = useContext(GlobalContext)
  const [searchMovie, setSearchMovie] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    console.log(searchMovie)
  }

  return (
    <main>
      <div className="container">
        <form action="" onSubmit={handleSearch}>
          <input type="text" placeholder="Cerca Titolo Film" value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)}/>
          <button type="submit">CERCA</button>
        </form>
      </div>
    </main>
  )
}

