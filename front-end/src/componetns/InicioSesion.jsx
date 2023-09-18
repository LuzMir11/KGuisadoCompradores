import React from 'react';
import '../../public/css/InicioSesion.css'
import {useForm} from 'react-hook-form'
import { Header } from './Header';
import axios from 'axios';
export function InicioSesion() {
  const { register, handleSubmit } = useForm()
  const linkApi = import.meta.env.VITE_ONLINE_SERVER+"/api/inicio-session-usuario";

  let userData = {}
  let sendData = async (userData)=>{
    const res = await axios.post(linkApi, userData)
    console.log(res.data)
    if(res.data.message){
      console.log(res.data.message);
    }
    
    localStorage.setItem('x-access-token', res.data.token); 
    localStorage.setItem('rol', res.data.rol)
    
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
            <input type="text" className='NombreUsuario' placeholder="  MarcoJc02" {...register("NombreUsuario",{
            required: {
              value: true,
              message:"El nombre de usuario es requerido"
            },
            minLength:{
              value: 5,
              message: "El nombre de usuario debe contener almenos 5 caracteres"
            },
            maxLength:{
              value: 8,
              message: "El nombre de usuario no debe contener mas de 8 caracteres"
            }
          })}/>
          </div>
          <div className='info4cont infotextcont'>
            <h3 className='infotext paswtext'>Contraseña:</h3>
          </div>
          <div className='info4cont infoin paswpcont'>
            <input type="password" className='Contrasena' placeholder="  Introduce tu contraseña"
            {...register("Contrasena",{
              required: {
                value: true,
                message:"La contrseña es requerida"
              },
              pattern:{
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/,
                message: "La contraseña debe de contener\n8 caracteres\n°Una mayuscula\n°Un numero\n|"
              }
            })} />
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