import React from 'react';
import '../../public/css/registrarse.css'
import {useForm} from 'react-hook-form'
import axios  from 'axios';
export function RegistrarseForm() {
  const {register,  handleSubmit} = useForm()
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
  
  let userData = {}
  let sendData = async (userData)=>{
   // const res = await axios.post(linkApi, userData)
    //localStorage.setItem('x-access-token', res.data.token); 
    window.location.href="/"
  }
const onSubmit = handleSubmit((data)=>{
        userData = data
        console.log(userData)
        //sendData(data) 
      })
  return <div className="upsign">
    
    <div className='continsign'>
      <form onSubmit={onSubmit} className='registerForm'>
      <div className='titlecont'>
        <h1 className='titletext'>Regístrate</h1>
      </div>
      <div className='infocont'>
    <div>
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstname" className='inttext' name="PrimerNombre" placeholder=" Ej. Marco"
            {...register("Nombre")}/>
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Appellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndname" className='inttext' name="Segundo Nombre" placeholder=" Ej. Filigonio" 
          {...register("Apellido")}/>
        </div>
        

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Direccion</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstlstname" className='inttext' name="fstlstname" placeholder=" Ej. Av del trabajo" 
          
          {...register("Direccion")}/>

        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Colonia</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndlstname" className='inttext' name="sndlstname" placeholder=" Ej. Tlamaco" 
          />
        </div>
</div>
<div  className=''>
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Numero de telefono</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="adreses" className='inttext' name="adreses" placeholder=" 7754886452 "
          {...register("NumeroTelefono")} />
            
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre de usuario</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="phonenum" className='inttext' name="phonenum inttext" placeholder=" La langosta" 
          {...register("NombreUsuario")}/>
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Contraseña</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="password" className='inttext' placeholder=" MarcoJc02 " 
          {...register("Contrasena")}
          />
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Que quieres ser ?</h3>
        </div>

        <div className='info4cont infoin'>
          <select  {...register("Rol_idRol")}>
              <option value="1">Comprador</option>
              <option value="2">Proveedor</option>
              <option value="3">Repartidor</option>
          </select>
        </div>
{/* 
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Correo electrónico:</h3>
        </div>

        <div className='info4cont infoin emailcont'>
          <input type="email" className='inttext' placeholder="  ejemplo@email.com" 
          />
        </div>
*/}
        
</div>
      </div>
      <div className='butoncont'>
      <button type='submit' class="botonround">Registrarse</button>
      </div>
      </form>
    </div>

  </div>
}