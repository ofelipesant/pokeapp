import { createContext, useState } from "react";

export const PokemonContext = createContext()

export function PokemonContextProvider({children}){
    const [pokemonsList, setPokemonsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    return(
        <PokemonContext.Provider value={{
            pokemonsList,
            setPokemonsList,
            isLoading,
            setIsLoading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}