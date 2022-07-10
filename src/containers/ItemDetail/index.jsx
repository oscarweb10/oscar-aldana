import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import './styles.css'

const ItemDetail = ({ product }) => {
  // Se aplica el hook Navigate, que permite hacer la navegacion entre ItemDeail y Cart
  const navigate = useNavigate();

  product.stock = 8;
  product.initial = 1

  const [qtyAdded, setQtyAdded] = useState(0);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }

  const handleTerminate = () => {
    navigate('/cart')
  }
  console.log(qtyAdded)
  return (
    <div className='contenedorProducto'>
      <h4>{product.title}</h4>
      <img className='monitor' src={product.image} alt='productos' />
      <p>{product.description}</p>

      {!qtyAdded ?
        <ItemCount onConfirm={handleConfirm} stock={product.stock} />
        :
        <button onClick={handleTerminate}>Terminar compra</button>
      }

    </div>
  )
}

export default ItemDetail