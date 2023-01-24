import React from 'react';
import CartWidget from '../CartWiget';
import './NavBar.css';

function NavBarMenu () {
  return <>
  <nav className='NavBarMenu'>
 <ul className="nav justify-content-center" >

  <li className="nav-item">
  <a className="nav-link active" href="./">Inicio</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="../paginas/Viajes">Viajes</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="../paginas/SobreMi">Sobre Mi</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="../paginas/LenguaDeSeñas">Lengua de señas</a>
  </li>

</ul>
</nav>
   <CartWidget />
  </>;

}
export default NavBarMenu;
 
