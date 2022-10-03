import React from "react";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { getPokemons } from "../../services/getPokemons";
import {getDataPokemons } from "../../services/getDataPokemons";
import { FlatList, View, Text } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import FooterLoading from "../../components/FooterLoading";

export default function Home(){
    const { isLoading, setIsLoading, pokemonsList, setPokemonsList, offSet, setOffSet, page, setPage} = useContext(PokemonContext)
    const per_page = 50

    async function fetchPokemons(){
        try{
            if(isLoading == true) return
            setIsLoading(true)
            const data = await getPokemons(per_page, offSet)
    
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

    useEffect(() => {
        fetchPokemons()
    }, [])

    useEffect(() => {
        setOffSet(per_page*page)
    },[page])

    return(
        <View>
            <FlatList
            data={pokemonsList}
            renderItem={({item}) => <PokemonCard pokemons={item}/>}
            onEndReached={fetchPokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterLoading loading={isLoading}/>}
            />
        </View>
    )
}