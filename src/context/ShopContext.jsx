import React, { createContext, useState } from 'react'
export const Shop = createContext();

const ShopProvider = ({ children }) => {

  /*const [estadoA, setEstadoA] = useState('Valor por defecto')*/

  const [cart, setCart] = useState([]);


  const addItem = (producto, cantidad) => {
    console.log(producto, cantidad);

    const productoRepetido = isInCart(producto)
    console.log(productoRepetido);
    if (productoRepetido) {
      productoRepetido.quantity += cantidad
      setCart([...cart])
    } else {
      setCart([...cart, { ...producto, quantity: cantidad }])
    }
  }

  const isInCart = (producto) => {
    return cart.find(elemento => elemento.id === producto.id);
  }


  const cartLenght = () => {
    let cantidad = 0;
    cart.forEach(i => {
      cantidad = cantidad + i.quantity;
    })
    return (cantidad)
  }

  const removeItem = (producto) => {
    let cartTemporal = [...cart]
    const newCart = cartTemporal.filter(item => item.id !== producto.id)
    setCart(newCart);
  }

  function cleanCart() {
    setCart([]);

  }

  return (
    <Shop.Provider value={{ addItem, cart, cartLenght, removeItem, cleanCart }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider