import React, { useState } from 'react';
import { Header } from '../Header';
import { PedidoCard} from './PedidoCard'
import { PedidosHeadCard } from './PedidosHeadCard';
import { CardPlatillo } from '../CardPlatillo';
import { VentanaModal } from '../VentanaModal'
import '../../../public/css/Pedidos-main.css'
export function Pedidos(){
    const platillo = [{
    Calificacion:"5",
    Costos:"25",
    Descripcion: "Rojos / verdes",
    Direccion : "calle de la discordia",
    Fecha: null,
    Horarios: "18/04/2023",
    Imagen: "../../public/assets/chilaquiles.png",
    Platillo: "Chilaquiles",
    idPlatillos: 2
}]
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    
    return(
        <>
        <Header/>
        <div className='Pedidos-main'>
            <PedidosHeadCard/>
            <PedidoCard onClick={() => cambiarEstadoModal1(true)}></PedidoCard>
            <CardPlatillo platillos={platillo}/>

        </div>
            <VentanaModal estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1}>
                <CardPlatillo platillos={platillo}/>
            </VentanaModal>
        
        </>   
        );
}
