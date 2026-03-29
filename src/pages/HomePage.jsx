import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import AppCards from "../components/AppCards"
import AppFilterGenre from "../components/AppFilterGenre"

export default function HomePage() {

  const { filterMediaGenre } = useContext(GlobalContext)

  return (
    <main className="bg-secondary min-vh-100">
      <div className="container">

        <AppFilterGenre/>
        
        <section className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 py-1">
          {
            filterMediaGenre.results.map(element => (
              <AppCards
                key={element.id}
                element={element}
              />
            ))
          }
        </section>
      </div>
    </main>
  )
}