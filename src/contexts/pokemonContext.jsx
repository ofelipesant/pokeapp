import { createContext, useState } from "react";
import { getPokemons } from "../services/getPokemons"
import { getDataPokemons } from "../services/getDataPokemons"

export const PokemonContext = createContext()

export function PokemonContextProvider({children}){
    const [pokemonsList, setPokemonsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(50)
    const [notFound, setNotFound] = useState(false)

    async function fetchPokemons(){
        try{
            if(isLoading == true) return
            setIsLoading(true)
            const data = await getPokemons(perPage, offSet)
    
            const promises = data.results.map(async (pokemon) => {
                return await getDataPokemons(pokemon.url)
            })
            
            const results = await Promise.all(promises)
            setPokemonsList([...pokemonsList, ...results])
            setPage(page + 1)
            setIsLoading(false)
    
        } catch(error){
            throw new Error(`[ERROR]: fetchPokemons - (${error})`)
        }
    }

    return(
        <PokemonContext.Provider value={{
            fetchPokemons,
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