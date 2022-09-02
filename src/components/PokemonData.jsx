import React from 'react'
import { useParams } from 'react-router-dom'


  

const Pokemondata = () => {
  const { id } = useParams()
  return (
    <div> br
    <br />
    <br /><br /><br /><br /> Pokemondata
    { id }
    { id }</div>
    
  )
}

export default Pokemondata