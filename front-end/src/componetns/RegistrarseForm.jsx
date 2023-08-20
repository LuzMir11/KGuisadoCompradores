import React from 'react';
import '../../public/css/registrarse.css'
import {Form} from "react-router-dom"
import axios  from 'axios';
export function RegistrarseForm() {

  let linkApi ="http://localhost:3000/api/usuaros"
  let state ={
    PrimerNombre: "" ,
    SegundoNombre: "",
    PrimerApellido: "",
    SegundoApellido: "",
    Direccion: "",
    NumTelefono: 0,
    NombreUsuario:"" ,
    Contrasena: ""
  }
  const userData = {
    PrimerNombre: this.state.PrimerNombre, 
    SegundoNombre: this.state.SegundoNombre,
    PrimerApellido: this.state.PrimerApellido,
    SegundoApellido: this.state.SegundoApellido,
    Direccion: this.state.Direccion,
    NumTelefono: this.state.NumTelefono,
    NombreUsuario: this.state.NombreUsuario,
    Contrasena: this.state.Contrasena
  }
  let sendData = async ()=>{
    await axios.post(linkApi, userData) 
    console.log(userData)
    window.location.href="/"
  }
  return <div className="upsign">
    
    <div className='continsign'>
      <form onSubmit={sendData}>
      <div className='titlecont'>
        <h1 className='titletext'>Regístrate</h1>
      </div>
      <div className='infocont'>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstname" className='inttext' name="PrimerNombre" placeholder=" Ej. Marco"
            onChange={this.state.PrimerNombre}
            />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Segundo nombre</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndname" className='inttext' name="sndname" placeholder=" Ej. Julian" 
            onChange={this.state.SegundoNombre}
          />
        </div>
        

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Primer apellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstlstname" className='inttext' name="fstlstname" placeholder=" Ej. Gomez" 
            onChange={this.state.PrimerApellido}
          />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Segundo apellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndlstname" className='inttext' name="sndlstname" placeholder=" Ej. Velasquez" 
            onChange={this.state.SegundoApellido}
          />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Dierección</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="adreses" className='inttext' name="adreses" placeholder=" Calle Algarazan no.27 col. Las Nuves "
            onChange={this.state.Direccion}
           />
            
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Número de teléfono</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="phonenum" className='inttext' name="phonenum inttext" placeholder=" 0257567890" 
            onChange={this.state.NumTelefono}
          />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre de usuario</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="email" className='inttext' placeholder=" MarcoJc02 " 
            onChange={this.state.NombreUsuario}
          />
        </div>
{/* 
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Correo electrónico:</h3>
        </div>

        <div className='info4cont infoin emailcont'>
          <input type="email" className='inttext' placeholder="  ejemplo@email.com" 
            onChange={thi.state.Co}
          />
        </div>
*/}
        <div className='info4cont infotextcont'>
          <h3 className='infotext paswtext'>Contraseña:</h3>
        </div>

        <div className='info4cont infoin paswpcont'>
          <input type="password" className='inttext' placeholder="  Introduce tu contraseña" 
            onChange={this.state.Contrasena}
          />
        </div>

      </div>
      <div className='butoncont'>
      <button type='submit' class="botonround">Registrarse</button>
      </div>
      </form>
    </div>

  </div>
}