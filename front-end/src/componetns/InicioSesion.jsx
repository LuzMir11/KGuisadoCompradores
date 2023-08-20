import React from 'react';

import './insignstyle.css'

export function InicioSesion() {

  return <div className="insign">
    
    <div className='continsign'>
      <div className='titlecont'>
        <h1 className='titletext'>Inicia sesión</h1>
      </div>
      <div className='infocont'>
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre de usuario:</h3>
        </div>
        <div className='info4cont infoin emailcont'>
          <input type="email" className='inttext' placeholder="  MarcoJc02" />
        </div>
        <div className='info4cont infotextcont'>
          <h3 className='infotext paswtext'>Contraseña:</h3>
        </div>
        <div className='info4cont infoin paswpcont'>
          <input type="password" className='inttext' placeholder="  Introduce tu contraseña" />
        </div>
      </div>
      <div className='butoncont'>
      <button class="botonround">Iniciar sesión</button>
      </div>
    </div>

  </div>
}