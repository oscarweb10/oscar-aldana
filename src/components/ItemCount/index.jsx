import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import './styles.css'


const ItemCount = ({ onConfirm, stock }) => {
    const [count, setValue] = useState(1);
    const navigation = useNavigate()

    const handleAdd = () => {
        if ((count < stock)) {
            setValue(count + 1)
        } else {
            swal({
                title: "Stock Máximo: " + stock,
                icon: "warning",
                button: "Aceptar"
            });
        }
        if(stock===0){
            swal({
                title: "Disculpe Producto sin Stock",
                text: "Puede selecionar otros productos",
                icon: "warning",
                button: "Aceptar"
            });
            navigation('/')
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setValue(count - 1)
        } else {
            swal({
                title: "Compra Minima: 1",
                icon: "warning",
                button: "Aceptar"
            });
        }
        if(stock===0){
            swal({
                title: "Disculpe Producto sin Stock",
                text: "Puede selecionar otros productos",
                icon: "warning",
                button: "Aceptar"
            });
            navigation('/')
        }
    }

    const handleConfirm = () => {
        if (count <= stock) {
            onConfirm(count)
        }
        else {
            swal({
                title: "Disculpe Producto sin Stock",
                text: "Puede selecionar otros productos",
                icon: "warning",
                button: "Aceptar"
            });
            navigation('/')
        }
    }
    return (
        <div>
            <div>
                <button type="button" className="btn btn-danger" onClick={handleDecrement}>-</button>
                <b>{count}</b>
                <button type="button" className="btn btn-success" onClick={handleAdd}>+</button>
            </div>
            <div>
                <button class="btn btn-primary" onClick={handleConfirm}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount