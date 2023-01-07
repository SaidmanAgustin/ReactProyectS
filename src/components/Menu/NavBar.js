import React from 'react';
import CartWidget from '../CartWiget';
function NavBar () {
  return <>
<ul className="nav justify-content-center">

  <li className="nav-item">
  <a className="nav-link active" href="#!">Inicio</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="#!">Viajes</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="#!">Blog</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" href="#!">Lengua de señas</a>
  </li>

</ul>
   <CartWidget />
  </>

}
export default NavBar;
 
