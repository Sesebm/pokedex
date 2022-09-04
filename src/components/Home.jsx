import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameSlice } from '../store/yourName.slice'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    console.log(e.target.name.value.trim())
    if(inputValue.length !== 0) {
      dispatch(setNameSlice(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div>
    <h1 className='salute'>Hola entrenador!</h1>
    <div className='secondarytext'>Para poder comenzar dame tu nombre</div>



    <form onSubmit={handleSubmit}>
     
     <div className="form__group field">
  <input type="input" className="form__field" placeholder="Nombre" name="name" id='name' required />
  <label htmlFor="name" className="form__label">Nombre</label>
  <button className='startbutton'>Comenzar!</button>
</div>
      {/* <input id='name' type="text" /> */}

      
    </form>
    </div>
  )
}

export default Home