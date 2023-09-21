import React from 'react'
import { Platillos } from '../Platillos';

export function PedidoCard ({pedidos}){
    if (!pedidos || pedidos == []) return <h1>No tienes pedidos aun</h1>;
    const pedidosList = pedidos.map(pedido =>(
        <div className='PedidosHeadCard'>
            <div className='PedidosHeadCard-1'>
                <div className='PedidosHeadCard-NumP'>
                    <h1></h1>
                </div>
                
            </div>
            <div className='PedidosHeadCard-2'>
                <div className='PedidosHeadCard-infoPedido'>
                    <h2>pe</h2>
                    <p>Pasan por ellos en 3 min</p>
                </div>
            </div>
            <div className='PedidosHeadCard-3'>
                <h2>Recibes </h2>
                <p>120</p>
            </div>
        </div>
        
    ))
    return(
        <>{pedidosList}</>
        
        );
}