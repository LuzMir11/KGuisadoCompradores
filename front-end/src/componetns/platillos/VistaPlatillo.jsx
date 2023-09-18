import React from "react";
import "../../../public/css/boxPlatillos.css"
import {CardPlatillo} from "../CardPlatillo"
import {Header} from "../Header"
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import {header} from '../../utils/heders'

export function VistaPlatillo ( ){
  let a = useParams();
  const baseURL = import.meta.env.VITE_ONLINE_SERVER+'/api/platillos/'+a.id; 
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
    return (
        <div className="boxPlatillos">
            <Header/>
            <CardPlatillo platillos={platillo} />
            <div className="">
              <Link to={"pedido/nuevo/"+a.id} >Comprar</Link>
            </div>
        </div> 
    )
}