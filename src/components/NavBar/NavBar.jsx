import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css'

const NavBar = () => {
    return(
      <div>
      <h1>Eléctrico <span>EN LINEA</span></h1>
    <ul>
         <li><a class="active" href="#home">Inicio</a></li>
        <li><a href="#empresa">Empresa</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <CartWidget/>
    </ul>

     </div>
     )
}

export default NavBar