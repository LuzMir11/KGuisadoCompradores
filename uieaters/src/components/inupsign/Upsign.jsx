import React from 'react';

import './upsignstyle.css'

export function Upsign() {

  return <div className="upsign">
    
    <div className='continsign'>
      <div className='titlecont'>
        <h1 className='titletext'>Regístrate</h1>
      </div>
      <div className='infocont'>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstname" className='inttext' name="fstname" placeholder=" Ej. Marco" />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Segundo nombre</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndname" className='inttext' name="sndname" placeholder=" Ej. Julian" />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Primer apellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstlstname" className='inttext' name="fstlstname" placeholder=" Ej. Gomez" />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Segundo apellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndlstname" className='inttext' name="sndlstname" placeholder=" Ej. Velasquez" />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Dierección</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="adreses" className='inttext' name="adreses" placeholder=" Calle Algarazan no.27 col. Las Nuves " />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Número de teléfono</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="phonenum" className='inttext' name="phonenum inttext" placeholder=" 0257567890" />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre de usuario</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="email" className='inttext' placeholder=" MarcoJc02 " />
        </div>
{/* 
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Correo electrónico:</h3>
        </div>

        <div className='info4cont infoin emailcont'>
          <input type="email" className='inttext' placeholder="  ejemplo@email.com" />
        </div>
*/}
        <div className='info4cont infotextcont'>
          <h3 className='infotext paswtext'>Contraseña:</h3>
        </div>

        <div className='info4cont infoin paswpcont'>
          <input type="password" className='inttext' placeholder="  Introduce tu contraseña" />
        </div>

      </div>
      <div className='butoncont'>
      <button class="botonround">Registrarse</button>
      </div>
    </div>

  </div>
}