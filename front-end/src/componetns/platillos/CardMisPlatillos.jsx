import React, { useState } from "react";
import axios from "axios";

import { header } from "../../utils/heders";

import "../../../public/css/cardMisPlatillos.css"
export function CardMisPlatillos({misPlatillos}){
        console.log(misPlatillos)
        
        let [eliminarmsg, setEliminarmsg] = useState(); 
        if(!misPlatillos) return null;

        let eliminar  =  (idPlatillos)=>{
               console.log(idPlatillos)
            const conf = {
      headers:{
        "x-access-token": header()
      }
    } 
            const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/platillos/'+idPlatillos;
             axios.delete(baseURL, conf ).then( (response) => {
            const msg= [response.data]
            setEliminarmsg(msg)
            console.log(msg)
            window.location.href= '/lista/platillos'
        });
 
        }
        let listaPlatillos = misPlatillos[0].map(Platillo =>(
                <div className="card-Mis-Platillos">
                    <img src={Platillo.Imagen} width={150} height={150}/>
                    <div className="card-Mis-Platillos-info">
                      <b className="parrafou-m">Nombre</b>
                      <p className="parrafou-m">{Platillo.Platillo}</p>
                      <b className="parrafou-m">Descripcion</b>
                      <p className="parrafou-m">{Platillo.Descripcion}</p>
                      <b className="parrafou-m">Precio</b>
                      <p className="parrafou-m">{Platillo.Costos}</p>
                      <div className="eliminar-producto">

                        <a  onClick={()=>{eliminar(Platillo.idPlatillos)}}>Eliminar</a>
                      </div>
                    </div>
                    

                </div>
                
           
    ))
        return(

            <>
            <div className="boxContainer">
                {listaPlatillos}
            </div>
            </>
        )
    
       
}