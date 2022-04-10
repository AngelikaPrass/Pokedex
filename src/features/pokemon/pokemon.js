import {useEffect, useState} from "react";
import axios from "axios";
import {Animation} from "../animation";

export const SinglePokemonPage = (props) => {
    const pokemonId = props.id;
    const [pokeData, setPokeData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => {
                setPokeData(res.data)
                setLoading(false)
            });
    }, [])

    return(
        <div>
            {loading && <h3> <Animation /> </h3>}
        {!loading &&
            <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokeData.name} />
            <h3>{pokeData.height}</h3>
            <h3>{pokeData.weight}</h3>
            <h3> {pokeData.types.map(x => x.type).map(x => x.name)}</h3>
            </div>
    }
        </div>

    )

}
