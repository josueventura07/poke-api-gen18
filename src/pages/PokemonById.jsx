import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokemonbyid/Pokemon404'
import './styles/pokemonById.css'

const PokemonById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => {
      setPokemon(res.data) 
      
    })
    .catch(err =>  { 
      console.log(err)
      setHasError(true)
    })
    
  }, [])
  
  if(hasError) {
    return <Pokemon404 />
  } 

  return (

    <div className='pokeById__container'>
      <Link className='pokeById_return' to='/pokedex'><div className='pokeById_return-icon'>&#60;</div>Return to Pokedex</Link>
      <div className='card_pokeById-header'>
        <img className='header__logo' src='./images/pokemonbyid/logopokemon.png' alt="logo" />
      </div>
    <article className={`card_poke-ById bg-pokeById-${pokemon?.types[0].type.name}`}>
      <header>
      <img className='card_poke-img-ById' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img" />
      </header>
      <section className='card_poke-containerById'>
        <h2 className={`card_poke-name-ById letter-pokeById-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <div className='description__container'>
          <div className='desciption_minibox'>
            <p className='description__title'>Height</p>
            <p className='description-value'>{pokemon?.height}</p>
          </div>
          <div className='desciption_minibox'>
            <p className='description__title'>Weight</p>
            <p className='description-value'>{pokemon?.weight}</p>
          </div>
        </div>
        <div className='card_pokeById-types-ability-container'>
          <div className='type'>
          <p className='card_pokeById_type-label'>Type</p>
        <ul className='card_pokeById-types-container'>
          {
            pokemon?.types.map(type => (
              <li key={type.slot} className='card_pokeById-type'>{type.type.name}</li>
            ))
          }
          </ul>
          </div>
          <div className='ability'>
          <p className='card_pokeById_ability-label'>Abilities</p>
            <ul className='card_pokeById-ability-container'>
          {
            pokemon?.abilities.map(ability => (
              <li key={ability.slot} className='card_pokeById-ability'>{ability.ability.name}</li>
            ))
          }
          </ul>
          </div>
          
        </div>
        <div className='stats-move'>
        <ul className='card_pokeById_stats-container'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.name} className='card_pokeById-stat'>
                  <div className='stat'>
                    <span className='card_pokeById_stat-label'>{stat.stat.name}</span>
                    <div className={`card_pokeById_stat-bar stat_bar-percent-${stat.base_stat <= 10 ? 10 : 
                    stat.base_stat <= 20 ? 20 :
                    stat.base_stat <= 30 ? 30 :
                    stat.base_stat <= 40 ? 40 :
                    stat.base_stat <= 50 ? 50 :
                    stat.base_stat <= 60 ? 60 :
                    stat.base_stat <= 70 ? 70 :
                    stat.base_stat <= 80 ? 80 :
                    stat.base_stat <= 90 ? 90 :
                    stat.base_stat > 90 ? 100 : ''} bg-pokeById-${pokemon?.types[0].type.name}`}></div>
                  </div>
                  <span className='card_pokeById_stat-number'>{stat.base_stat}</span>
                  
                </li>
              ))
            }
          </ul>
          

          </div>
      </section>
      <div className='movements_container'>
            <h1 className='movement_title'>Movements</h1>
          <ul className='movements_list'>
            {
              pokemon?.moves.map(move => (
                <li className='move_list' key={move.move.url}>
                    <span>{move.move.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
    </article>
    </div>
  )
}

export default PokemonById