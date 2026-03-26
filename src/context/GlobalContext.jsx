import { createContext, cretateContext } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {

    const apiUrl = 'https://api.themoviedb.org/'
    const envKey = import.meta.env.VITE_SECRET_KEY

    return (
        <GlobalContext.Provider
            value={{
                envKey,
                apiUrl
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}