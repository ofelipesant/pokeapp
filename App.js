import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { PokemonContextProvider } from './src/contexts/pokemonContext';

export default function App() {
  return (
    <PokemonContextProvider>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </PokemonContextProvider>
  );
}
