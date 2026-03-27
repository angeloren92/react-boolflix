import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function AppHeader() {

    const {
    tempSearchMovieTitle,
    setTempSearchMovieTitle,
    setSearchMediaType,
    handleSearch
  } = useContext(GlobalContext)

  return (
    <header>
      <nav className="navbar bg-dark navbar-expand" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BOOLFLIX</a>
          <form action="" onSubmit={handleSearch}>
            <input type="text" placeholder="Cerca Titolo Film" value={tempSearchMovieTitle} onChange={(e) => setTempSearchMovieTitle(e.target.value)} />
            <select name="" id="" onChange={(e) => setSearchMediaType(e.target.value)}>
              <option value="multi">Film e SerieTV</option>
              <option value="movie">Film</option>
              <option value="tv">SerieTV</option>
            </select>
            <button type="submit">CERCA</button>
          </form>
        </div>
      </nav>
    </header >
  )
}


