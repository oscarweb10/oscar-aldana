import React, { useState } from 'react'


const ItemCounter = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert('Stock Maximo: ' + stock)
        }
    }

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1)
        } else {
            alert('Compra Minima: ' + initial)
        }

    }

    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
            <button onClick={handleDecrement}>-</button>

            <div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCounter