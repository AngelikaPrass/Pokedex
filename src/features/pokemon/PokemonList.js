import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPokemon, selectPokemon, addPokemon} from "./pokemonListSlice";
import axios from 'axios';
import {SinglePokemonPage} from "./pokemon";

export const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(selectPokemon);
    const [offset, setOffset] = useState(20);
    const pokemonStatus = useSelector(state => state.pokemon.pokemon.status);
    useEffect(() => {
        if (pokemonStatus === 'idle') {
            dispatch(fetchPokemon())
        }
    }, [pokemonStatus, dispatch])

    const onClickFunction = (n) => {
        if (n !== 0){
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${n}/`)
                .then(res => res.data.results)
                .then(data => dispatch(addPokemon(data)))
        }
        else{
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20/`)
                .then(res => res.data.results)
                .then(data => dispatch(addPokemon(data)))
        }
        setOffset(n + 20);

    }
    const error = useSelector(state => state.pokemon.pokemon.error);

    const renderedPokemon = pokemon.map((poke, index) => (
        <div key={index}>
            <h3> {poke.name} </h3>
            <SinglePokemonPage id={poke.id}/>
        </div>

    ))

    return (
        <section className="pokemon-list">
            <h2>pokemon</h2>
            {renderedPokemon}
            <div>
                <button onClick={() => onClickFunction(offset)}> Load more </button>
            </div>
        </section>
    )
}
