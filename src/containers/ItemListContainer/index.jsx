import React from 'react'
import './styles.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='offers'>
        <p>{greeting}</p>
        <div className='products'>
        <img src="/assets/espiralnegro.jpg" alt="breaker" className='img'/>
        <img src="/assets/breaker403p.jpg" alt="breaker" className='img'/>
        <img src="/assets/tester.png" alt="breaker" className='img'/>
        </div>
    </div>
  )
}

export default ItemListContainer