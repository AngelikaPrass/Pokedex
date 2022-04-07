import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {useState} from "react";

let [offset, setOffset] = useState(0);
export const fetchPokemons= createAsyncThunk('pokemon/fetchPokemons', async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/limit=20&offset=${offset}/`);

    return response.data
})
