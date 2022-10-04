import {View, Text, Image} from 'react-native'
import { getImageDefault } from '../../../assets/helpers/getImageDefault'
import { heightFormatter, weightFormatter } from '../../../assets/helpers/measureFormatters'

export default function PokemonDetails({route}){
    const pokemon = route.params
    const pokemonImage = getImageDefault(pokemon.id)

    return(
        <View>
            <View>
                <Image
                source={{uri: pokemonImage}}
                style={{width: 100, height: 100}}
                />
                <View>
                    <Text>{pokemon.name}</Text>
                    <Text>{pokemon.id}</Text>
                    <View>
                        {pokemon.types && pokemon.types.map((type, index) => {
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
            </View>

            <View>
                <View>
                    <Text>Altura:</Text>
                    <Text>{heightFormatter(pokemon.height)}cm</Text>
                </View>
                <View>
                    <Text>Peso:</Text>
                    <Text>{weightFormatter(pokemon.weight)}kg</Text>
                </View>
            </View>

            <View>
                {pokemon.stats && pokemon.stats.map((stat, index) => {
                    return(
                        <View key={index}>
                            <Text>{stat.stat.name}:</Text>
                            <View width={stat.base_stat} style={{backgroundColor: "red", height: 10}}/>
                            <Text>{stat.base_stat}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}