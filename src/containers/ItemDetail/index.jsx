import React from 'react'
import './styles.css'

const itemDetail = ({product}) => {
   
  return (
    <div className='contenedorProducto'>
        <h4>{product.title}</h4>
        <img className='monitor' src = {product.image}/>
        <p>{product.description}</p>
    </div>
  )
}

export default itemDetail