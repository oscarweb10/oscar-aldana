import React, { useState } from 'react'
import './styles.css'


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
            {<div class="alert alert-danger" role="alert" >
                     {alert("Value > maxQuantity")}
            </div>}
           
        }
    }
    return (
        <div>
            <div>
           
                <button type="button" className ="btn btn-danger"onClick={handleDecrement}>-</button>
                <b>{count}</b>
                
                <button type="button" className ="btn btn-success" onClick={handleAdd}>+</button>
            </div>
            <div>
           {/* <button onClick={() => onAdd(count)}>{count}</button>*/}
            <button class="btn btn-primary" onClick={handleConfirm}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount