import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutDefault from "./default_layout/LayoutDefault"
import HomePage from "./pages/HomePage"
import { GlobalContextProvider } from "./context/GlobalContext"


function App() {


  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
