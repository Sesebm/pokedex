import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  Link,
  useParams
} from 'react-router-dom'
import Home from './components/Home'
import LoginNeeded from './components/LoginNeeded'
import Pokedex from './components/Pokedex'
import Pokemondata from './components/PokemonData'

function App() {
 

  return (
    <HashRouter>
    <div className="App">
    <div className='header'>
      <img className='header-img' src="..\public\image 12.png" alt="" />
      <div className='elli1'>

      </div>
      <div className='elli2'>

      </div>
      <div className='header-red'>   </div>
      <div className='header-black'>  </div>
    </div>
    
    <Routes>
    <Route path="/" element={<Home />} />
    
    <Route element={<LoginNeeded />}>   
        <Route path="/pokedex" element={<Pokedex />} />
	      <Route path="/pokedex/:id" element={<Pokemondata />} />
      </Route>
      </Routes>
      {/* <p>Esto se mostrará abajo de lo que salga de las rutas</p> */}
    </div>
    </HashRouter>
  )
}

export default App
