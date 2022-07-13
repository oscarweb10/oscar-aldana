import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Shop } from '../../context/ShopContext'
import './styles.css'

const CartWidget = () => {


 

const x=3
const y=5
const z = ( )=>{
  return x+y
}




console.log(z());


  const {cart, cartLenght} = useContext(Shop);
 
 /* const cartLenght= () =>{
   const x = cart.map(producto =>{
      return (producto.quantity)
    })*/
    
    /*const cartLenght= () =>{
    let cantidad = 0;
    cart.forEach(i=>{
        cantidad = cantidad + i.quantity;
    })
    return(cantidad)
}*/





  return (
    <div className='cartWidget'>
        <AiOutlineShoppingCart/>
        
        {cart.length && <span>{cartLenght()}</span>}

    </div>
  )
}

export default CartWidget