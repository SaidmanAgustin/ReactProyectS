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
  <li className='"nav-item dropdown"'>
    <Link className="nav-link dropdown-toggle" to="../paginas/Viajes" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Viajes</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className='dropdown-item' to='.Bariloche'>Bariloche</Link>  
                <Link className='dropdown-item' to='.BuenosAires'>Buenos Aires</Link>
                <Link className='dropdown-item' to='.EntreRios'>Entre Rios</Link>
                <Link className='dropdown-item' to='.Misiones'>Misiones</Link>
                <Link className='dropdown-item' to='.Salta'>Salta</Link>
              </div> 
            
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
 
