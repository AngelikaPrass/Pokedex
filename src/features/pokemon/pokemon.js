import {useEffect, useState} from "react";
import axios from "axios";

export const SinglePokemonPage = (props) => {
    const pokemonId = props.id;
    const [pokeData, setPokeData] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => setPokeData(res.data));
    }, [])

    return(
            <div>
                <h3>{pokeData.height}</h3>
                <h3>{pokeData.weight}</h3>
            </div>
    )
}
