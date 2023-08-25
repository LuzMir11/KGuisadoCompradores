import React from 'react';
import { Header } from '../Header';
import { RepartirCard} from './RepartirCard'
import { RepartirHeadCard} from './RepartirHeadCard';
import { CardPlatillo } from '../CardPlatillo';
import '../../../public/css/Pedidos-main.css'
export function Repartir(){
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
    return(
        <>
        <Header/>
        <div className='Pedidos-main'>
            <RepartirHeadCard/>
            <RepartirCard/>

        </div>
        </>   
        );
}
