import React from 'react'
import './styles/pokeball.css'

const Pokeball = () => {
  return (
    <div className='pokeball__container'>
        <div className='pokeball__pokeball'>
            <div className='pokeball__middle_top'>
                <div className='pokeball__highligh_top'></div>
            </div>
            <div className='pokeball__circle'>
                <div className='pokeball__circle_btn'></div>
            </div>
            <div className='pokeball__middle_bottom'></div>
        </div>
        <div className='pokeball__floor'></div>
      </div>
  )
}

export default Pokeball