import { createContext, useState } from "react";

export const PokemonContext = createContext()

export function PokemonContextProvider({children}){
    const [pokemonsList, setPokemonsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(0)

    return(
        <PokemonContext.Provider value={{
            pokemonsList,
            setPokemonsList,
            isLoading,
            setIsLoading,
            offSet,
            setOffSet,
            page,
            setPage
        }}>
            {children}
        </PokemonContext.Provider>
    )
}