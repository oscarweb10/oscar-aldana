import React, { createContext, useState } from 'react'

export const Shop = createContext();
const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (producto, cantidad) => {
    const productoRepetido = isInCart(producto)
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

  const totalShopping = () => {
    let price = 0
    if (cart.length > 0) {
      for (const item of cart) {
        price += item.price * item.quantity
      }
    }
    return price
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
    <Shop.Provider value={{ addItem, cart, cartLenght, removeItem, cleanCart, totalShopping }}>
      {children}

    </Shop.Provider>
  )
}

export default ShopProvider