import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getImageDefault } from "../../../assets/helpers/getImageDefault";

export default function PokemonCard(props){
    const { pokemons, navigation } = props
    const pokemonImage = getImageDefault(pokemons.id)

    return(
        <TouchableOpacity onPress={() => navigation.navigate("pokemonDetails", pokemons)}>
            <View style={style.container}>
                <View>
                    <Text style={style.text}>#{pokemons.id}</Text>
                    <Text style={style.text}>{pokemons.name}</Text>
                </View>

                <View>
                    <Image 
                    source={{uri: pokemonImage}}
                    resizeMode="contain"  
                    style={{height: 100, width: 100 }}
                    />
                </View>

                <View>
                    {pokemons.types && pokemons.types.map((type, index) => {
                        return(
                            <View key={index}>
                                <Text>
                                    {type.type.name}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 10,
        marginTop: 10,
        height: 200
    },
})