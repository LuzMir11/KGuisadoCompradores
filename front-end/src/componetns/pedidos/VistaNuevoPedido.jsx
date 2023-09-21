import React from 'react';
import {useForm} from 'react-hook-form';
import { Header } from '../Header';
import { useParams } from 'react-router-dom';
import { CardPlatillo } from '../CardPlatillo';
import axios from 'axios';
import {header} from '../../utils/heders';


export function VistaPlatilloNuevoPedido (){
    let a = useParams();
    a = parseInt(a.id);
    const { register, handleSubmit } = useForm();
    const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/pedido/nuevo/'+a; 
    const [platillo, setPlatillo] = React.useState(null);
    const conf = {
      headers:{
        "x-access-token": header()
      }
    }
    
    React.useEffect(() => {
      //const token = localStorage.getItem('x-access-token')
       axios.get(baseURL, conf).then( (response) => {
        const platillo= [response.data]
      console.log(platillo)
      setPlatillo(platillo);

      });
    }, []);
  let sendData = async (userData)=>{
    
    
    const pedidoData = userData
    pedidoData['CostoDeEnvio'] ="No disponible aun"
    pedidoData['PEDIDO_STATUS_idPedidoStatus'] = 0
    pedidoData['Tipo_de_pago_idTipo_de_pago'] = 0
    pedidoData['idComprador'] = localStorage.getItem('miId')
    console.log(pedidoData)
    const token= localStorage.getItem('x-access-token')
    const res = await axios.post(baseURL, userData,
      {headers: {'x-access-token': token}}      
      )
    console.log(res.data)
    if(res.data.message){
      console.log(res.data.message);
      localStorage.removeItem('rol')
    }

    window.location.href="/comprador/pedidos/"
  }
const onSubmit = handleSubmit((data)=>{
        sendData(data) 
      })
    return<>
            <Header/>

            <h1>vista nuevo pedido</h1>
            <div>

            <CardPlatillo platillos={platillo}/> 
            </div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Direccion de entrega' {...register("DireccionEntrega",{
                    required:{
                        value:true,
                        message: "Es nesesario la direccion de entrega de su productos"
                    },
                    minLength:{
                        value: 5,
                        message: "Minimo 5 letras"
                    },
                    maxLength:{
                        value: 100,
                        message: "La descripcion  del platillo no debe contener mas de 45 caracteres"
                    }
                })}/>
                <input type='text' placeholder='Descripcion del pedido'{...register("DescripcionDeEnvio",{
                    required:{
                        value:true,
                        message:"Es nesesario la descripcion de entrega"
                    }
                })}/>
            <button class="botonround" type='submit'>Confirmar compra</button>
            </form>
            
    </>
}