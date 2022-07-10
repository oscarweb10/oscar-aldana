import React, { useState } from 'react'

const ItemCount = ({ onConfirm, stock }) => {

    const [count, setValue] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setValue(count + 1)
        } else {
            alert('Stock Maximo: ' + stock)
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setValue(count - 1)
        } else {
            alert('Compra Minima: ' + 1)
        }
    }

    const onAdd = (count) => {
        console.log('Agrego al Carrito: ' + count)
    }

    /*const reset = () => {
      setCount(initial)
  }*/

    const handleConfirm = () => {
        if (count <= stock) {
            onConfirm(count)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <div>
            <div>
                <h3>{count}</h3>
                <button onClick={handleDecrement}>-</button>

                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default ItemCount