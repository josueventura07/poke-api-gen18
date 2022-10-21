import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import PokemonById from './pages/PokemonById'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './components/shared/Footer'
import Loading from './components/pokedex/Loading'
import { useState } from 'react'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<PokemonById />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
