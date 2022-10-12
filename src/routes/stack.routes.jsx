import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"
import PokemonDetails from "../screens/PokemonDetails";

const { Screen, Navigator } = createNativeStackNavigator()

export function BaseRoutes(){
    return(
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="pokemonDetails"
                component={PokemonDetails}
                options={{
                    title: '',
                }}
            />
        </Navigator>
    )
}