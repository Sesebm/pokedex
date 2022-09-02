import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(pokemon)
  

  const navigation = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    
    <div className='pokemonCard' onClick={navigation}>
    
     <img className='pokemonCard-img' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
      <h2>{pokemon?.name}</h2>
      <p>{pokemon?.types[0].type.name} / {pokemon?.types[1]?.type.name}</p>
    
    <div className='pokemonCard-stats'>
      <div><p>Salud</p><h3>{pokemon?.stats[0].base_stat}</h3></div>
      <div><p>Ataque</p><h3>{pokemon?.stats[1].base_stat}</h3></div>
      <div><p>Defensa</p><h3>{pokemon?.stats[2].base_stat}</h3></div>
      <div><p>Velocidad</p><h3>{pokemon?.stats[5].base_stat}</h3></div>
    </div>
    
    </div>
  )
}

export default PokemonCard