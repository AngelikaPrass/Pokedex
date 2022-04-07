import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPokemon, selectPokemon, addPokemon} from "./pokemonListSlice";
import axios from 'axios';

export const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(selectPokemon);
    const pokemonStatus = useSelector(state => state.pokemon.pokemon.status);
    useEffect(() => {
        if (pokemonStatus === 'idle') {
            dispatch(fetchPokemon())
        }
    }, [pokemonStatus, dispatch])

    const onClickFunction = (n) => {
        axios.get(`https://pokeapi.co/api/v2/limit=20&offset=${n}/`)
            .then(res => res.data)
            .then(data => dispatch(addPokemon(data)))
    }
    const error = useSelector(state => state.pokemon.pokemon.error);

    const renderedPokemon = pokemon.map(poke => (
            <h3>{poke.title}</h3>
    ))

    return (
        <section className="pokemon-list">
            <h2>pokemon</h2>
            {renderedPokemon}
            <div>
                <button onClick={() => onClickFunction(pokemon.length)}> Load more </button>
            </div>
        </section>
    )
}