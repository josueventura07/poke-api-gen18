import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../shared/Pokeball'
import './styles/pokemons404.css'

const Pokemon404 = () => {


  return (
    <div className='pokemon404__container'>
     <Link className='pokemon404__return' to='/pokedex'>Return to Pokedex</Link>
      <>
    <div className='pokemon404__title'>Pokemon not found</div>
    
    </>
    <Pokeball />
    </div>
  )
}

export default Pokemon404