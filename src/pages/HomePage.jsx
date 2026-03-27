import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import AppCards from "../components/AppCards"

export default function HomePage() {

  const { mediaSearchResults } = useContext(GlobalContext)

  return (
    <main>
      <div className="container">

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