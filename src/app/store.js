import { configureStore} from '@reduxjs/toolkit'
import pokemonListReducer from '../features/pokemon/pokemonListSlice'


export default configureStore({
    reducer: {
        pokemon: pokemonListReducer
    }
})
