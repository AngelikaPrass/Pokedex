import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {useState} from "react";

const initialState = {
    pokemon: [],
    status: 'idle',
    error: null
}

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2?limit=20/`)
    return response.data
})

const pokemonListSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon(state, action) {
            state.pokemon = state.pokemon.concat(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPokemon.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched pokemon to the array
                state.pokemon = state.pokemon.concat(action.payload)
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default pokemonListSlice.reducer
export const { addPokemon } = pokemonListSlice.actions;
export const selectPokemon = state => state.pokemon.pokemon;
export const selectPokemonById = (state, pokeId) => state.pokemon.pokemon.find(poke => poke.id === pokeId);
