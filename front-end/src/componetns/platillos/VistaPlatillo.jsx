import React from "react";
import "../../../public/css/boxPlatillos.css"
import {CardPlatillo} from "../CardPlatillo"
import {Header} from "../Header"
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import {header} from '../../utils/heders'
import { Button } from "@mui/material";

export function VistaPlatillo ( ){
  let a = useParams();
  a = parseInt(a.id);
  
  const baseURL = import.meta.env.VITE_LOCAL_SERVER+'/api/platillos/'+a; 
    const [platillo, setPlatillo] = React.useState(null);
    const conf = {
      headers:{
        "x-access-token": header()
      }
    }
    const redirect = ()=>{
      window.location.href="/pedido/nuevo/"+a
    }
    React.useEffect(() => {
      //const token = localStorage.getItem('x-access-token')
       axios.get(baseURL, conf).then( (response) => {
        const platillo= [response.data]
      console.log(platillo)
      setPlatillo(platillo);

      });
    }, []);
    return (
        <div className="vista_Platillos">
            <Header/>
            <CardPlatillo platillos={platillo} />
            <div className="">
            <Button onClick={redirect}>Comprar</Button>
            </div>
        </div> 
    )
}