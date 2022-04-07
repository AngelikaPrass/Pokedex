import {applyMiddleware, combineReducers, configureStore, createStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import pokemonListReducer from '../features/pokemon/pokemonListSlice'
//
// const combinedReducers = combineReducers({
//     pokemonList: pokemonListReducer,
//
// })

export default configureStore({
    reducer: {
        pokemon: pokemonListReducer
    }
})