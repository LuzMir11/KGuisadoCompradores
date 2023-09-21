import React from 'react'
import { Platillos } from '../Platillos';


let Aceptar = ({status, idPedido})=>{

        if(status == 0){
            return(<p >Aceptar</p>)
        }
        if(status == 1){
            return(<p>Listo para repartir</p>)
        }
        if(status == 2){
            return(<p>En camino</p>)
        }
        if(status == 3){
            return(<p>Pedido llego a su destino</p>)
        }
        if(status == 4){
            return(<p>Pedido fue pagado y aceptado</p>)
        }
    }
export function PedidoCard ({pedidos}){
    if (!pedidos || pedidos == []) return <h1>No tienes pedidos aun</h1>;
  
    const pedidosList = pedidos.map(pedido =>(
        <>
        <div className='PedidosHeadCard'>
            <div className='PedidosHeadCard-1'>
                <div className='PedidosHeadCard-NumP'>
                   
                  <img src={pedido.Imagen} width={60} height={60}/>
                </div>
                
            </div>
            <div className='PedidosHeadCard-2'>
                <div className='PedidosHeadCard-infoPedido'>
                    <Aceptar status={pedido.PEDIDO_STATUS_idPedidoStatus} idPedido={pedido.idPedido}/>
                    <h2>{pedido.Platillo}</h2>
                    <p>{pedido.DescripcionDeEnvio}</p>
                </div>
            </div>
            <div className='PedidosHeadCard-3'>
                <b>Calificacion: {pedido.Calificacion} </b>
                
                <p>{pedido.Costos}$</p>
            </div>
        </div>
        </>
    ))
    return(
        <>{pedidosList}</>
        
        );
}

