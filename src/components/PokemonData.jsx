import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SkillBar from 'react-skillbars';

  

const Pokemondata = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [pokemonData, setPokemonData] = useState()

  useEffect(() => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    axios.get(url)
    .then(res => setPokemon(res.data))
  }, [])

 useEffect(() => {
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/`+id)
    .then(res => setPokemonData(res.data))
 }, [pokemon])
 


  
  const navigate = useNavigate()
  const skills = [
    {type: "HP", level: pokemon?.stats[0].base_stat},
    {type: "ATAQUE", level: pokemon?.stats[1].base_stat},
    {type: "DEFENSA", level: pokemon?.stats[2].base_stat},
    {type: "ATQ. ESP.", level: pokemon?.stats[3].base_stat},
    {type: "DEF. ESP.", level: pokemon?.stats[4].base_stat},
    {type: "VELOCIDAD", level: pokemon?.stats[5].base_stat},
  ];

  const colors = {
    bar: "#000000",
    title: {
      text: "#fff",
      background: "#000000"
    }
  };



  return (
    <div className='datapage'>
    <div className={`data-top pokemon-card__image--`+ pokemon?.types[0].type.name}>
      <div className='data-left'>

        <div className='datanumber'># {pokemon?.id} </div>
        <div className={'dataname pokemon-card__level--'+ pokemon?.types[0].type.name}> {pokemon?.name}</div>
        
        <div className='datadata'>  {pokemonData? pokemonData[`flavor_text_entries`][59][`flavor_text`] + pokemonData[`flavor_text_entries`][79][`flavor_text`] :` ` }</div>
        
        <Link  className='databoton' to="/pokedex">Atras</Link>
        


      </div>

      <div>
      <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt={pokemon?.types[0].type.name} />
      </div>
    </div>

<div className='data-stats'>
<SkillBar skills={skills} height={'10vh'} animationDelay={2000} colors={colors}/>



<h2>Movimientos</h2>
</div>
<div className='data-mov'> {pokemon?.moves.map((move, index) => (
          <p className='data-mov-p'>{move.move.name} </p> )) } </div>


    </div>
  )
}

export default Pokemondata