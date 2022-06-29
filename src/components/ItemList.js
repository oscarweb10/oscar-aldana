import React from 'react'
import Item from './Item'
import ItemList1 from './ItemList1.css'

const ItemList = ({info}) => {
  return (
    <div className='card1'>
        {info.map(prod => <Item key = {prod.id} prod = {prod}/>)}
    </div>
  )
}

export default ItemList