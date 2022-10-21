import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const CardPoke = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(pokemon)

  const navigate = useNavigate()

  const handleClick = () => {
      navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article className={`card_poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`card_poke-header bg-${pokemon?.types[0].type.name}`}>
        <img className='card_poke-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        
        <div className='card_poke-info'>
        <section className='card_poke-body'>
          <h3 className={`card_poke-name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <ul className='card_poke-types-container'>
          {
            pokemon?.types.map(type => (
              <li key={type.slot} className='card_poke-type'>{type.type.name}</li>
            ))
          }
          </ul>
          <p className='card_poke_type-label'>Type</p>
        </section>
          <ul className='card_poke_stats-container'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.name} className='card_poke-stat'>
                  <span className='card_poke_stat-label'>{stat.stat.name}</span>
                  <span className='card_poke_stat-number'>{stat.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
      
    </article>
  )
}

export default CardPoke