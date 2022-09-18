import { createContext, useState } from "react";

export const PokemonContext = createContext()

export function PokemonContextProvider({children}){
    const [pokemonsList, setPokemonsList] = useState(null)

    return(
        <PokemonContext.Provider value={{
            pokemonsList,
            setPokemonsList
        }}>
            {children}
        </PokemonContext.Provider>
    )
}