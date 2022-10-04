import { View, Text, StyleSheet, Image } from "react-native";

export default function PokemonCard(props){
    const { pokemons } = props

    return(
        <View style={style.container}>
            <View>
                <Text style={style.text}>#{pokemons.order}</Text>
                <Text style={style.text}>{pokemons.name}</Text>
            </View>

            <View>
                <Image 
                source={{uri: pokemons.sprites.front_default}}
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
    )
}

const style = StyleSheet.create({
    container:{
        padding: 10,
        marginTop: 10,
        height: 200
    },
})