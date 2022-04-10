import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPokemon, selectPokemon, addPokemon} from "./pokemonListSlice";
import axios from 'axios';
import {SinglePokemonPage} from "./pokemon";
import {Animation} from "../animation";
import { VscError } from "react-icons/vsc";
import "../../style.css";

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
    const getId = (url) => {
        const id = url.split("/");
        return id[id.length - 2];
    }
    const renderedPokemon = pokemon.map((poke, index) => (

        <div key={index} className="flex-child">
            <h3> {poke.name} </h3>
            <SinglePokemonPage id={getId(poke.url)}/>
        </div>

    ))
    return (
        <>
        {error ? <div> <VscError /> Oops! You've encountered an error </div> : <> </>}
            {pokemonStatus === 'loading' ? <Animation /> :<> </>}
        {!error && !(pokemonStatus === 'loading') &&
        <section className="pokemon-list">
            {renderedPokemon}
            <div>
                <button className="button" onClick={() => onClickFunction(offset)}> Load more </button>
            </div>
        </section>
        }
        </>
    )
}
