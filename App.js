import { Routes } from './src/routes';
import { PokemonContextProvider } from './src/contexts/pokemonContext';

export default function App() {
  return (
    <PokemonContextProvider>
      <Routes/>
    </PokemonContextProvider>
  );
}
