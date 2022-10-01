import React from "react";
import Header from "../../components/Header";
import { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { getPokemons } from "../../services/getPokemons";
import { FlatList, View, Text } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import FooterLoading from "../../components/FooterLoading";

export default function Home(){
    const { isLoading, setIsLoading, pokemonsList, setPokemonsList } = useContext(PokemonContext)
    const [ offSetApi, setOffSetApi ] = useState(0)
    const [page, setPage] = useState(0)

    async function fetchPokemons(){
        const per_page = 50
        
        try{
            setIsLoading(true)
            const data = await getPokemons(per_page, offSetApi)
            const results = data.results
            
            setPokemonsList([{...pokemonsList}, ...results])
            setPage(page+1)
            setOffSetApi(per_page*page)
            setIsLoading(false)
    
        } catch(error){
            throw new Error(`[ERROR]: fetchPokemons - (${error})`)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])
    return(
        <View>
            <Text>Testando</Text>
            <FlatList
            data={pokemonsList}
            renderItem={({item}) => <PokemonCard pokemons={item}/>}
            onEndReached={fetchPokemons()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterLoading loading={isLoading}/>}
            />
        </View>
    )
}