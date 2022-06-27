import React from 'react'
import ItemCounter from '../../components/ItemCounter/ItemCounter'
import './styles.css'

const ItemListContainer = ({greeting}) => {

  const onAdd = (count)=>{
    alert( 'Agrego al Carrito: ' +count )
}

  return (
    <div className='offers'>
        <p>{greeting}</p>
        <div className='products'>
            <img src="/assets/espiralnegro.jpg" alt="breaker" className='img'/>
            <img src="/assets/breaker403p.jpg" alt="breaker" className='img'/>
            <img src="/assets/tester.png" alt="breaker" className='img'/>
        
            <ItemCounter initial = {1} stock = {8} onAdd = {onAdd}/>
        </div>
    </div>
  )
}

export default ItemListContainer