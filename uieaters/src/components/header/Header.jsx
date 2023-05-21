import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './hstyle.css'

export function Header() {

  return <div className="header" >
    <a href='a' className='logotipo'>
      <img src="assets/logoph.svg" alt="logotipo kguisado" className='logo'/>
      </a>
      <nav>
        <input type="checkbox" id="check"></input>
          <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
          </label>
        <ul>
          <li><a href='a'>información</a></li>
          <li><a href='a'>nosotros</a></li>
          <li><a href='a'>¡Comencemos!</a></li>
        </ul>
      </nav>

  </div>
}
