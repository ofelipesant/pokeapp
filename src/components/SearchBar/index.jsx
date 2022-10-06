import { TextInput, View, Button } from "react-native"
import { useState } from "react"
import {searchPokemon} from "../../services/searchPokemon"

export default function SearchBar(props){
    const { navigation } = props
    const [searchData, setSearchData] = useState('')

    async function onSearchHandler(pokemon){
        const resultSearch = await searchPokemon(pokemon)
        navigation.navigate("pokemonDetails", resultSearch)
    }

    function search(){
        onSearchHandler(searchData)
    }

    return(
        <View>
            <TextInput
            onChangeText={(value) => setSearchData(value)}
            placeholder={"Pesquise pelo nome ou número do pokemon"}/>
            <Button
            title="pesquisar"
            onPress={search}
            />
        </View>
    )

}