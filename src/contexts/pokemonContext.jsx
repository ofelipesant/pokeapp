import { createContext, useState } from "react";
import { getPokemons } from "../services/getPokemons"
import { getDataPokemons } from "../services/getDataPokemons"

export const PokemonContext = createContext()

export function PokemonContextProvider({children}){
    const [pokemonsList, setPokemonsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(0)
    const [notFound, setNotFound] = useState(false)

    return(
        <PokemonContext.Provider value={{
            pokemonsList,
            setPokemonsList,
            isLoading,
            setIsLoading,
            offSet,
            setOffSet,
            page,
            setPage,
            notFound,
            setNotFound
        }}>
            {children}
        </PokemonContext.Provider>
    )
}