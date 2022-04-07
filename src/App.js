import {useEffect} from "react";
import {fetchPokemon} from "./features/pokemon/pokemonListSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {PokemonList} from "./features/pokemon/PokemonList";

function App() {
  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
        {/*<Navbar />*/},
        <div className="App">
          <PokemonList />
        </div>
  )
  // return (
  //   <div className="App">
  //     {/*<header></header>*/}
  //     {/*<pokemonList></pokemonList>*/}
  //     {/*<footer></footer>*/}
  //   </div>
  // );
}

export default App;
