import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function HomePage() {
  
  const {envKey} = useContext(GlobalContext)
  console.log(envKey)

  return (
    <>
      <h1>MAIN</h1>
    </>
  )
}

