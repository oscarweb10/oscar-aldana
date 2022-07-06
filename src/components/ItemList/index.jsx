import React from 'react'
import Item from '../Item'
import './ItemList1.css'

const ItemList = ({products}) => {
  return (
    <div className='card1'>
        {products?.map(prod => <Item key = {prod.id} prod = {prod}/>)}
    </div>
  )
   
}

export default ItemList