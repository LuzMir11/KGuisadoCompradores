import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
*/
import '../../public/css/hstyle.css';

export function Header() {

  return <div className="header" >
    <a href='/' className='logotipo'>
      <img src="../../public/assets/logoph.svg" alt="logotipo kguisado" className='logo'/>
      </a>
      <nav>
        <input type="checkbox" id="check"></input>
          <label htmlFor="check" className="checkbtn">
          </label>
        <ul>
          <li><a href='/'>información</a></li>
          <li><a href='/'>nosotros</a></li>
          <li><a href='/signin'>¡Comencemos!</a></li>
        </ul>
      </nav>

  </div>
}
