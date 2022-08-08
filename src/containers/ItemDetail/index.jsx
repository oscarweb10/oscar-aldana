import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import { Shop } from '../../context/ShopContext';
import swal from 'sweetalert';
import './styles.css'

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  product.initial = 1
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Shop)
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }
  const handleTerminate = () => {
    addItem(product, qtyAdded)
    navigate('/cart')
      swal({
        title: "Agrego: "  ,
        text: ''+ product.title +'    Cant: ' + qtyAdded,
        timer: 2000
    });
  }
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <img className='card-img-top' src={product.image} alt='productos' />
      </div>
      <div className='col-sm-6'>
        <h4 className='cart-title'>{product.title}</h4>
        <p className='cart-title'>Precio Unitario $ {product.price}</p>
        <h6 className='cart-text'>{product.description}</h6>
        <p className=''>Cantidad disponible: {product.stock}</p>
        {!qtyAdded ?
          <ItemCount onConfirm={handleConfirm} stock={product.stock} />
          :
          <button type="button" className="btn btn-success" onClick={handleTerminate}>Continuar Compra </button>
        }
      </div>
    </div>
  )
}

export default ItemDetail