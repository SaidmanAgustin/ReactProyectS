import React from 'react';
import {Link} from 'react-router-dom' 
function NavBar () {
  <>
<ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" to='/paginas/Inicio' >Inicio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/paginas/Viajes' >Viajes</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/paginas/Blog' >Blog</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/paginas/LenguaDeSeñas' >Lenguas De Señas</Link>
  </li>
</ul>
  </>
}

export default NavBar;
 
