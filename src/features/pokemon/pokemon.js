import { selectPokemonById} from "./pokemonListSlice";

export const SinglePokemonPage = ({ match }) => {
    const { pokemonId } = match.params
    const pokemon = useSelector(state => selectPokemonById(state, pokemonId));
}