import React from "react";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { FlatList, SafeAreaView } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import FooterLoading from "../../components/FooterLoading";
import SearchBar from "../../components/SearchBar";

export default function Home({navigation}){
    const { isLoading, pokemonsList, setOffSet, page, perPage, fetchPokemons} = useContext(PokemonContext)
    
    useEffect(() => {
        fetchPokemons()
    }, [])

    useEffect(() => {
        setOffSet(perPage*page)
    },[page])

    return(
        <SafeAreaView>
            <Header navigation={navigation}/>
            <SearchBar navigation={navigation}/>
            <FlatList
            data={pokemonsList}
            renderItem={({item}) => <PokemonCard pokemons={item} navigation={navigation}/>}
            onEndReached={fetchPokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterLoading loading={isLoading}/>}
            />
        </SafeAreaView>
    )
}