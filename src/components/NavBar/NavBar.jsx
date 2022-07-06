import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
      <div>
      <h1>Eléctrico <span>EN LINEA</span></h1>
      <nav>
    <ul>
         <li className="nav-item"><Link to= '/'>Home</Link></li>
         <li className="nav-item"><Link to= '/category/electronics'>Electronics</Link></li>
         <li className="nav-item"><Link to= '/category/jewelery'>Jewelery</Link></li>
         <li className="nav-item"><Link to= "/category/women's clothing">Women`s clothing</Link></li>
         <li className="nav-item"><Link to= "/category/men's clothing">Men`s clothing</Link></li>
        
        <CartWidget/>
    </ul>
    </nav>
     </div>
     )
}

export default NavBar