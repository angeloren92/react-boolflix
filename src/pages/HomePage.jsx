import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import AppCards from "../components/AppCards"

export default function HomePage() {

  const { mediaSearchResults } = useContext(GlobalContext)

  return (
    <main className="bg-secondary min-vh-100">
      <div className="container">
        <section className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 py-3">
          {
            mediaSearchResults.results.map(element => (
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