import React from 'react'
import './styles/loading.css'

const Loading = () => {
  return (
    <div>
      <div className='container'>
        <div className='pokeball'>
            <div className='middle_top'>
                <div className='highligh_top'></div>
            </div>
            <div className='circle'>
                <div className='circle_btn'></div>
            </div>
            <div className='middle_bottom'></div>
        </div>
        <div className='floor'></div>
      </div>
    </div>
  )
}

export default Loading
