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
          <section className="d-flex justify-content-between w-100 flex-wrap mx-5">
            <a className="navbar-brand fw-bolder fs-2 text-danger" href="#">BOOLFLIX</a>
            <form action="" className="d-flex flex-wrap gap-2"
              onSubmit={handleSearch}>
              <div className="d-flex flex-nowrap py-2">
                <input type="text" id="searchTitleInput" placeholder="Cerca Titolo" className="i btn btn-outline-light"
                  value={tempSearchMovieTitle}
                  onChange={(e) => setTempSearchMovieTitle(e.target.value)} />
                <select name="mediaType" id="mediaType" className="btn btn-outline-light text-start"
                  onChange={(e) => setSearchMediaType(e.target.value)}>
                  <option value="multi">Film e SerieTV</option>
                  <option value="movie">Film</option>
                  <option value="tv">SerieTV</option>
                </select>
              </div>
              <button id="submit" className="btn btn-outline-light flex-grow-1" type="submit">CERCA</button>
            </form>
          </section>
        </div>
      </nav>
    </header >
  )
}

