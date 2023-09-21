import React from "react";
import {useState}from "react";
import {useForm} from "react-hook-form";
import {DropImage} from "../imagenes/DropImage" 
import "../../../public/css/PlatilloForm.css"
import  axios  from "axios";
export function PlatilloForm(editarplatillo){
  const { register, handleSubmit } = useForm();
  const [img, setImagen] = useState();
  const [file, setFile] = useState();

  

  const linkApi = import.meta.env.VITE_LOCAL_SERVER+"/api/platillos/";

  let userData = {}
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  function buildFormData(formData, data, parentKey) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
  }

  function jsonToFormData(data) {
    const formData = new FormData();
    
    buildFormData(formData, data);
    
    return formData;
  }
  let sendData = async (userData)=>{
    
    userData['Imagen']= file
    userData['Horarios'] = ''
    userData['Calificacion'] = 3
    const formData = jsonToFormData(userData)  
    console.log(formData)
    const token= localStorage.getItem('x-access-token')
    const res = await axios.post(linkApi, formData,
      {headers: {'x-access-token': token}}      
      )
    console.log(res.data)
    if(res.data.message){
      console.log(res.data.message);
      localStorage.removeItem('rol')
    }

    window.location.href="/"
  }
const onSubmit = handleSubmit((data)=>{
        userData = data
        sendData(data) 
      })
    return <>

          <div className="NuevoPlatillo-form">
    
    <div className='cont-NuevoPlatillo-form'>
      <div className='NuevoPlatillo-form-titlecont'>
        <h1 className='NuevoPlatillo-form-titletext'>Agregar Platillo</h1>
      </div>
      <form onSubmit={onSubmit} className='NuevoPlatillo-form-form'>
        <div className='NuevoPlatillo-form-infocont'>

          <div className='info4cont infotextcont'>
            <h3 className='infotext emailtext'>Nombre del Platillo:</h3>
          </div>
          <div className='info4cont infoin emailcont'>
            <input type="text" className='Nombre platillo' placeholder="  Tacos al pastor" {...register("Platillo",{
            required: {
              value: true,
              message:"El nombre del platillo es requerido"
            },
            minLength:{
              value: 5,
              message: "El nombre del platillo debe contener almenos 5 caracteres"
            },
            maxLength:{
              value: 45,
              message: "El nombre del platillo no debe contener mas de 45 caracteres"
            }
          })}/>
          </div>
          <div className='info4cont infotextcont'>
            <h3 className='infotext emailtext'>Descripcion del platillo:</h3>
          </div>
          <div className='info4cont infoin emailcont'>
            <input type="text" className='NombreUsuario' placeholder="Descripcion del platillo" {...register("Platillo",{
            required: {
              value: true,
              message:"La descripcion  del platillo es requerido"
            },
            minLength:{
              value: 5,
              message: "La descripcion  del platillo debe contener almenos 5 caracteres"
            },
            maxLength:{
              value: 300,
              message: "La descripcion  del platillo no debe contener mas de 45 caracteres"
            }
          })}/>
          </div>
          
          
        <div className='info4cont infotextcont'>
            <h3 className='infotext emailtext'>Direccion: </h3>
            <p className="NuevoPlatillo_parrafou parrafouTC">Es nesesaria su direccion para que un repartidor pase por ella</p>
            <p className="NuevoPlatillo_parrafou">Puede escribir su ubicacion o pegar la Direccion por google maps</p>
          </div>
          <div className='info4cont infoin emailcont'>
            <input type="text" className='NombreUsuario' placeholder="Direccion del proveedor" {...register("Descripcion",{
            required: {
              value: true,
              message:"La descripcion del platillo es requerido"
            },
            minLength:{
              value: 5,
              message: "La descripcion del platillo debe contener almenos 5 caracteres"
            },
            maxLength:{
              value: 45,
              message: "La descripcion del platillo no debe contener mas de 45 caracteres"
            }
          })}/>
          </div>
            <div className='info4cont infotextcont'>
            <h3 className='infotext emailtext'>Precio de tu platillo:</h3>
          </div>
          <div className='info4cont infoin emailcont'>
            <input type="number" className='NombreUsuario' placeholder="  60$" {...register("Costos",{
             min: 0, max: 10000 
            })}/>
          </div>
       <input
              type="file"
              className="form-control bg-dark text-light rounded-0 border border-secondary"
              onChange={handleChange}
            />     
        </div>
        <div className='butoncont'>
        <button class="botonround" type='submit'>Agregar Platillo</button>
        </div>
      </form>
    </div>

  </div> 
    </>
}

