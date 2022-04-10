import {useEffect, useState} from "react";
import axios from "axios";
import {Animation} from "../animation";
import "../../style.css";

export const SinglePokemonPage = (props) => {
    const pokemonId = props.id;
    const [pokeData, setPokeData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => {
                setPokeData(res.data)
                setLoading(false)
            });
    }, [pokemonId])

    return(
   <>
        {loading && <h3> <Animation /> </h3>}
        {!loading &&
            <div className="poke-detail">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokeData.name} />
                <h3 className="type"> type: {pokeData.types.map(x => x.type.name).join(", ") } </h3>
                    <div className="more-details">
                        {showDetail && <>
                        <div className="detail-names">
                            <h3> height: {pokeData.height}</h3>
                            <h3> weight: {pokeData.weight}</h3>
                        </div>
                        <button className="button" onClick={()=> setShowDetail(false)}> Hide details </button>
                        </>
                        }

                        {
                            !showDetail && <button className="button" onClick={()=> setShowDetail(true)}> More details </button>
                        }
                    </div>
            </div>
    }
</>
    )
}
