import { View, Text, StyleSheet } from "react-native";

export default function PokemonCard(props){
    const {pokemons} = props
    
    return(
        <View style={style.container}>
            <Text style={style.text}>{pokemons.name}</Text>
            <Text style={style.text}>{pokemons.order}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#000',
        marginTop: 10,
    },
    text:{
        color: "#fff"
    }
})