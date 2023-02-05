import React from 'react';
import {Link} from "react-router-dom";
import CartWidget from '../CartWiget';
import './NavBar.css';

function NavBarMenu () {
  return <>
  
  <nav className='NavBarMenu'>
 <ul className="nav justify-content-center" >
  <li className="nav-item">
   <Link className="nav-link active" to="./">Inicio</Link>
  </li>
  <li className="nav-item">
   <Link className="nav-link active" to="../paginas/viajes">Viajes</Link>
  </li>         
  <li className="nav-item">
    <Link className="nav-link active" to="../paginas/SobreMi">Sobre Mi</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="../paginas/LenguaDeSeñas">Lengua de señas</Link>
  </li>
</ul>
</nav>
   <CartWidget />
  </>;

}
export default NavBarMenu;
 
