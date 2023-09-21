import React, { useState } from "react";
import axios from "axios";
import { header } from "../../utils/heders";
export function CardMisPlatillos({misPlatillos}){

        
        let [eliminarmsg, setEliminarmsg] = useState(); 
        if(!misPlatillos) return null;

        let eliminar  = (idPlatillos)=>{
               console.log(idPlatillos)
               const conf = {
                headers:{
                    "x-access-token": header()
                }
                } 
            const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/platillos/proveedor/platillos/'+idPlatillos;
            axios.get(baseURL, conf).then( (response) => {
            const msg= [response.data]
            setEliminarmsg(msg)
            console.log(msg)
        });
 
        }
        let listaPlatillos = misPlatillos[0].map(Platillo =>(
                <div>
                    <b>Nombre</b>
                    <p>{Platillo.Platillo}</p>
                    <b>Descripcion</b>
                    <p>{Platillo.Descripcion}</p>
                    <b>Precio</b>
                    <p>{Platillo.Costos}</p>
                    <a onClick={()=>{eliminar(Platillo.idPlatillos)}}>Eliminar</a>

                </div>
                
           
    ))
        return(
            <>{listaPlatillos}</>
        )
    
       
}