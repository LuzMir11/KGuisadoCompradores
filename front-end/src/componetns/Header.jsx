import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
*/
import '../../public/css/hstyle.css';
import { InicioSesion } from './InicioSesion';

export function Header() {
  let inicioSesion
  if(localStorage.getItem('rol')==2){
    //proveedores
     inicioSesion = <>
      <li><a href='/nuevo/platillo'>Nuevo platillo</a></li>
      <li><a href='/lista/platillos'>Mis Platillos</a></li>
      <li><a href='/comprador/pedidos'>Mis pedidos</a></li>
     </>
  }
  if(localStorage.getItem('rol') ==1 ){
    inicioSesion = <li><a href='/comprador/pedidos/'>Mis compras</a></li> 
  }
  if(localStorage.getItem('rol') ==3 ){
    inicioSesion = <li><a href='/a-repartir'>A repartir</a></li>
  }
  if(!localStorage.getItem('rol') ){
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
          {//<li><a href='/nosotro'>Nosotros</a></li>
          }
          <li><a href='/signin'>¡Comencemos!</a></li>
           
          {inicioSesion}
        </ul>
      </nav>

  </div>
}
