import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Pokemoncard from "./PokemonCard";
import { Link } from "react-router-dom";
const pokedex = () => {
  const [pokemon, setPokemon] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [optionType, setOptionType] = useState("All");
  const nameT = useSelector((state) => state.nameSlice);
  const [listTypes, setListTypes] = useState();
  const [pagination, setPagination] = useState(0);

 
  console.log(`https://pokeapi.co/api/v2/pokemon?offset=`+pagination+`&limit=`+(20))
  



  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setListTypes(res.data.results))
      .catch((err) => console.log(err));

    if (optionType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios
        .get(URL)
        .then((res) => {
          const arr = res.data.pokemon.map((e) => e.pokemon);
          setPokemon({ results: arr });
        })
        .catch((err) => console.log(err));
    } else if (pokeSearch) {
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

      const obj = {
        results: [{ url }],
      };
      setPokemon(obj);
    } else {


      const url = `https://pokeapi.co/api/v2/pokemon?offset=`+pagination+`&limit=`+(20)
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
     
      
    }
  }, [pokeSearch, optionType, pagination]);
  console.log(pokemon)
  const handleclicknext = () =>{
    setPagination(pagination+20)
    window.scrollTo(0, 0);
  }
  const handleclickback = () =>{
    if(pagination>19){
    setPagination(pagination-20)}
    window.scrollTo(0, 0);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setPokeSearch(e.target.searchText.value.trim().toLowerCase());
    setOptionType("All");
    e.target.searchText.value = "";
  };
  const handleChange = (e) => {
    setOptionType(e.target.value);
    setPokeSearch("");
  };

  return (
    <div>
      <div id="top" className="wellcome">
        <div className="secondarytext">
        <span className="firstext"> Bienvenido {nameT}</span>, aqui podras encontrar a tu pokemon favorito!                            
        </div>
        <span className="margen"></span>
        <form onSubmit={handleSubmit}>
        
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            id="searchText"
            placeholder="buscar pokemon.."
          />

          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
</form>

      </div><form>
        <select value={optionType} onChange={handleChange}>
          <option value="All">Todos los Pokemons</option>
          {listTypes?.map((type) => (
            <option key={type.name} value={type.name} >
              {type.name}
            </option>
          ))}
        </select>
      </form>



      <div className="cards-container">
        {pokemon?.results.map((pokemon, index) => (
          <Pokemoncard key={pokemon.url} url={pokemon.url} index={index} pagination={pagination}/>
        ))}
      </div>
      <button className="botdex" onClick={handleclickback}>Atras</button>
      <button className="botdex" onClick={handleclicknext}>Adelante</button>
    </div>
    
  );
};

export default pokedex;
