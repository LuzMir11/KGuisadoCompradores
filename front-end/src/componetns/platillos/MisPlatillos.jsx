import React, { useState } from "react";
import {Header} from "../Header";
import { CardMisPlatillos } from "./cardMisPlatillos";
import axios from "axios";

import {header} from '../../utils/heders'
import "../../../public/css/cardMisPlatillos.css"
export function MisPlatillos (){
    let usuario = localStorage.getItem('miId')
    console.log(usuario)
    const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/platillos/proveedor/platillos/'+usuario;
    let [misPlatillos, setMisPlatillos] = React.useState();
    let [card ,setCard] =React.useState();
    React.useEffect(() => {
       const conf = {
      headers:{
        "x-access-token": header()
      }
    } 
      //const token = localStorage.getItem('x-access-token')
       axios.get(baseURL, conf).then( (response) => {
        const misPlatillo= [response.data]
      console.log(misPlatillo)
      setMisPlatillos(misPlatillo);
        if(response.data.message){
            console.log(response.data.message)
           setCard(<><h1>{response.data.message}</h1></>) 
        }
        if(!response.data.message){
           
            setCard(<><div ><h1 className="titleless">Estos son tus platillos</h1></div>
            <CardMisPlatillos misPlatillos={misPlatillo}/></>)
        }
      });
    }, []);
    return(<>
        <Header/>
        {card}
    </>);
}