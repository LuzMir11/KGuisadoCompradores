import React from 'react';
import '../../public/css/registrarse.css'
import {useForm} from 'react-hook-form'
import axios  from 'axios';
export function RegistrarseForm(linkApi) {
 const {register,  handleSubmit, formState:{errors}} = useForm()
  console.log(linkApi) 
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
    console.log(linkApi)
    const res = await axios.post(linkApi.link, userData)
    window.location.href="/"
  }
const onSubmit = handleSubmit((data)=>{
        userData = data
        console.log(userData)
        sendData(data) 
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
            {...register("Nombre",{
              required: {
                value: true,
                message:"El nombre es requerido"
              }
            })}
            />
            
        </div>
        <div className='info4cont infoin'>
            {
            errors.Nombre && <span>{errors.Nombre.message}</span>
            }
            </div>
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Appellido</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndname" className='inttext' name="Segundo Nombre" placeholder=" Ej. Filigonio" 
          {...register("Apellido",{
            required: {
              value: true,
              message:"El apellido es requerido"
            }
          })}/>          
        </div>
        <div className='info4cont infoin'>
          {
          errors.Apellido && <span>{errors.Apellido.message}</span>
          }
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Direccion</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="fstlstname" className='inttext' name="fstlstname" placeholder=" Ej. Av del trabajo" 
          
          {...register("Direccion",{
            required: {
              value: true,
              message:"La direccion es requerida"
            }
          })}
          />
          
          </div>
        <div className='info4cont infoin'>
          {
          errors.Direccion && <span>{errors.Direccion.message}</span>
          }
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Colonia</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="sndlstname" className='inttext' name="sndlstname" placeholder=" Ej. Tlamaco" 
          {...register("Colonia",{
            required: {
              value: true,
              message:"La colonia es requerida"
            }
          })}
          />          
        </div>

        <div className='info4cont infoin'>
        {
          errors.Colonia && <span>{errors.Colonia.message}</span>
          }
        </div>
</div>
<div  className=''>
        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Numero de telefono</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="adreses" className='inttext' name="adreses" placeholder=" 7754886452 "
          {...register("NumeroTelefono",{
            required: {
              value: true,
              message:"El numero de telefono es requerido"
            },
            pattern:{
              value: /^[0-9]{10}$/,
              message: "Numero de telefono invalido"
            }
          })}
          />
                      
        </div>

        <div className='info4cont infoin'>
        {
          errors.NumeroTelefono && <span>{errors.NumeroTelefono.message}</span>
          }
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Nombre de usuario</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="text" id="phonenum" className='inttext' name="phonenum inttext" placeholder=" La langosta" 
          {...register("NombreUsuario",{
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
          })}
          />
          
        </div>

        <div className='info4cont infoin'>
        {
          errors.NombreUsuario && <span>{errors.NombreUsuario.message}</span>
          }
        </div>

        <div className='info4cont infotextcont'>
          <h3 className='infotext emailtext'>Contraseña</h3>
        </div>

        <div className='info4cont infoin'>
          <input type="password" className='inttext' placeholder=" MarcoJc02 " 
          {...register("Contrasena",{
            required: {
              value: true,
              message:"La contrseña es requerida"
            },
            pattern:{
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/,
              message: "La contraseña debe de contener\n8 caracteres\n°Una mayuscula\n°Un numero\n|"
            }
          })}
          />
          </div>

          <div className='info4cont infoin'>
          {errors.Contrasena && <span>{errors.Contrasena.message}</span>}
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