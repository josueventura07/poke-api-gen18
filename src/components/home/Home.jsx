import React from 'react'
import FormHome from './FormHome'
import './styles/home.css'



const Home = () => {
  return (
    <div className='pokedex__body'>
      <div className='pokedex'>
        <img className='pokedex_img' src="/images/home/pokedex.png" alt="img" />
        <header className='pokedex_header'>
          <h2 className='pokedex_subtitle'>Hello Trainer!</h2>
          <p className='pokedex_text'>Give me your name, to see the pokedex</p>
        </header>
        <FormHome className='pokedex_form' />
      </div>
        <img className='pokedex_img2' src='./images/personajes/personaje1.png' alt="img" />
        <img className='pokedex_img3' src='./images/personajes/Pikachu.png' alt="img" />
    </div>
  )
}

export default Home