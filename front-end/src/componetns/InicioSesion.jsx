import React from 'react';
import '../../public/css/InicioSesion.css'
import {useForm} from 'react-hook-form'
import { Header } from './Header';
import axios from 'axios';
export function InicioSesion() {
  const { register, handleSubmit } = useForm()
  const linkApi ="http://localhost:3000/api/inicio-session-usuario"

  let userData = {}
  let sendData = async (userData)=>{
    const res = await axios.post(linkApi, userData)
    localStorage.setItem('x-access-token', res.data.token); 
    window.location.href="/"
  }
const onSubmit = handleSubmit((data)=>{
        userData = data
        sendData(data) 
      })
  return <>
  <Header/>
   <div className="login-form">
    
    <div className='cont-login-form'>
      <div className='login-form-titlecont'>
        <h1 className='login-form-titletext'>Iniciar sesión</h1>
      </div>
      <form onSubmit={onSubmit} className='login-form-form'>
        <div className='login-form-infocont'>
          <div className='info4cont infotextcont'>
            <h3 className='infotext emailtext'>Nombre de usuario:</h3>
          </div>
          <div className='info4cont infoin emailcont'>
            <input type="text" className='NombreUsuario' placeholder="  MarcoJc02" {...register("NombreUsuario")}/>
          </div>
          <div className='info4cont infotextcont'>
            <h3 className='infotext paswtext'>Contraseña:</h3>
          </div>
          <div className='info4cont infoin paswpcont'>
            <input type="password" className='Contrasena' placeholder="  Introduce tu contraseña"
            {...register("Contrasena")} />
          </div>
        </div>
        <div className='butoncont'>
        <button class="botonround" type='submit'>Iniciar sesión</button>
        </div>
      </form>
    </div>

  </div>
</>
}