import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputsearch.css'

const InputSearch = () => {

const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim()}`)
    }

  return (
    <form className='inputsearch__container' onSubmit={submit}>
        <input className='inputsearch__input' id='search' type="text" placeholder='Search a Pokemon' />
        <button className='inputsearch__btn'>Search</button>
    </form>
  )
}

export default InputSearch