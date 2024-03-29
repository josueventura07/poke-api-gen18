import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Loading from '../components/pokedex/Loading'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if(typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map(e => e.pokemon)
        setPokemons(result)
      })
      .catch(err => console.log(err))
    } else {
   
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

   axios.get(URL)
   .then(res => setPokemons(res.data.results))
   .catch(err => console.log(err))
  }
  }, [typeSelected])
  
  console.log(pokemons)

  const userName = useSelector(state => state.userName)

  // logica de paginacion

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)

  const initialPoke = (page - 1) * pokePerPage
                //otra forma es: initialPoke + pokePerPage + 1
  const finalPoke = page * pokePerPage

  return (
    <div>
    {
      pokemons ?
      <div>
      <header className='pokedex__header'>
        <div className='pokedex__img'>
          <img src='./images/home/pokedex.png' alt="img" />
        </div>
      <p className='pokedex__welcome'>Welcome <span className='pokedex__name'>{userName}</span>, here you  can find your favorite pokemon.</p>
    </header>
    <aside className='handleinfo'>
      <section className='browsers'>
      <InputSearch />
      <SelectByType setTypeSelected={setTypeSelected}
      setPage = {setPage}
      />
      </section>
      <Pagination
        page = {page} 
        pagesLength = {pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage = {setPage}
      />
    </aside>
    <main className='over_card_container'>
      <div className='card_container'>
        {
        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
          <CardPoke
            key={pokemon.url}
            url={pokemon.url}
             />
        ))
        }
      </div>
    </main>
    </div> : <Loading />
    }
    </div>
  )
}

export default Pokedex