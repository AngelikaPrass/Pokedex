import {useEffect} from "react";
import {fetchPokemon} from "./features/pokemon/pokemonListSlice";
import {PokemonList} from "./features/pokemon/PokemonList";
import {useDispatch} from "react-redux";
import "./style.css";
import {Header} from "./features/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);
  return (
        <div className="App">
            <Header />
            <PokemonList />
        </div>
  )
 }

export default App;
