import React, { useState } from 'react';
import { Header } from '../Header';
import { PedidoCard} from './PedidoCard'
import { PedidosHeadCard } from './PedidosHeadCard';
import { CardPlatillo } from '../CardPlatillo';
import { VentanaModal } from '../VentanaModal'
import axios from 'axios';
import '../../../public/css/Pedidos-main.css'

export function Pedidos(){
    const idComprador = localStorage.getItem('miId')
    const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/comprador/pedidos/'+idComprador;
    const [pedidos, setPedido] = React.useState(null);
    React.useEffect( () => {
        //const token = localStorage.getItem('x-access-token')
        axios.get(baseURL).then( (response) => {
        setPedido(response.data);
        console.log(response.data)

        });
    }, []);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    
    return(
        <>
        <Header/>
        <div className='Pedidos-main'>
            <PedidosHeadCard />
            <PedidoCard onClick={() => cambiarEstadoModal1(true)} pedidos={pedidos}></PedidoCard>

        </div>
            <VentanaModal estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
                <h1>Modal1</h1>
            </VentanaModal>
        
        </>   
        );
}
