import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
*/
import '../../public/css/hstyle.css';
import { InicioSesion } from './InicioSesion';

export function Header() {
  let inicioSesion
  if(localStorage.getItem('rol')==1){
     inicioSesion = <li><a href='/nuevo/platillo'>Nuevo platillo</a></li>
  }else{
     inicioSesion = <li><a href='/login'>Iniciar session</a></li>
  }

  return <div className="header" >
    <a href='/' className='logotipo'>
      <img src="../../public/assets/logoph.svg" alt="logotipo kguisado" className='logo'/>
      </a>
      <nav>
        <input type="checkbox" id="check"></input>
          <label htmlFor="check" className="checkbtn">
          </label>
        <ul>
        
          <li><a href='/info'>Información</a></li>
          <li><a href='/nosotro'>Nosotros</a></li>
          <li><a href='/signin'>¡Comencemos!</a></li>
          
          {inicioSesion}
        </ul>
      </nav>

  </div>
}
