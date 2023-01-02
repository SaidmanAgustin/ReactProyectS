import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar =() => {
  return (
 
 <div>
  <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" to='/'>Inicio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/Viajes'>Viajes</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled" to='Blog'>Blog</Link>
  </li>
</ul>
 </div>
  )
}
export default NavBar;

