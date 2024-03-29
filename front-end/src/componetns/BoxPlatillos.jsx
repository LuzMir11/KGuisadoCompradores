import React from "react";
import "../../public/css/boxPlatillos.css"
import axios from 'axios';
import {CardPlatillo} from "./CardPlatillo"

export function BoxPlatillos ( ){
  const baseURL = 'http://localhost:3000/api/platillos'
  const [platillos, setPlatillo] = React.useState(null);
  React.useEffect( () => {
    //const token = localStorage.getItem('x-access-token')
     axios.get(baseURL).then( (response) => {
     setPlatillo(response.data);
     console.log(response)

    });
  }, []);
    return (
        <div className="boxPlatillos">
            <CardPlatillo platillos = {platillos}/>
        </div>
    )
}