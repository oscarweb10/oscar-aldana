import CartWidget from "../CartWidget";
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h1>Eléctrico <span>EN LINEA</span></h1>
      <h6 className="direccion">Valera - Estado Trujillo - Venezuela</h6>
      <nav>
        <ul>
          <li className="nav-item"><Link to='/'>Inicio</Link></li>
          <li className="nav-item"><Link to='/category/Equipos y Potencia'>Equipos y Potencia</Link></li>
          <li className="nav-item"><Link to='/category/Iluminacion'>Iluminacion</Link></li>
          <li className="nav-item"><Link to="/category/Tester y Medicion">Tester y Medicion</Link></li>
          <li className="nav-item"><Link to="/category/Proteccion">Proteccion</Link></li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  )
}

export default NavBar