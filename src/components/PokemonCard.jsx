import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url, index, pagination}) => {

  const [pokemon, setPokemon] = useState()
  const [pokemonData, setPokemonData] = useState()
  const urlEnd = index+1+pagination
  const dataurl=`https://pokeapi.co/api/v2/pokemon-species/`+ urlEnd
  
  const navigate = useNavigate()


  useEffect(() => {

    
    axios
    .get(url).then(function(res){
      setPokemon(res.data)
      axios.get(dataurl)
    .then(res => setPokemonData(res.data))
    })
      .catch(err => console.log(err))


  }, [])

  



  const navigation = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    



    <div className='pokemonCard' onClick={navigation}>
    
   
  
  <div className="wrapper">
    <div className="pokemon-card">
      <div className={`pokemon-card__image pokemon-card__image--`+ pokemon?.types[0].type.name}>
        <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt={pokemon?.types[0].type.name} />
      </div>
      <div className={`pokemon-card__level pokemon-card__level--`+ pokemon?.types[0].type.name}><p>{pokemon?.types[0].type.name}  {pokemon?.types[1]? `/ ` + pokemon.types[1]?.type.name: ` ` }</p></div>
      <div className="pokemon-card__unit-name">{pokemon?.name}</div>
      <div className="pokemon-card__unit-description">
        
        {pokemonData? pokemonData[`flavor_text_entries`][59][`flavor_text`] :` ` }
      </div>


      <div className={`clearfix pokemon-card__unit-stats pokemon-card__unit-stats--` + pokemon?.types[0].type.name}>
        <div className="one-third">
          <div className="stat">{pokemon?.stats[0].base_stat}</div>
          <div className="stat-value">HP</div>
        </div>

        <div className="one-third">
          <div className="stat">{pokemon?.stats[1].base_stat}</div>
          <div className="stat-value">Ataque</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">{pokemon?.stats[2].base_stat}</div>
          <div className="stat-value">Defensat</div>
        </div>

      </div>

    </div> 
 
  
</div> 

    
    </div>
  )
}

export default PokemonCard