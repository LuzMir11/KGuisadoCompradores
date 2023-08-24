import React from "react";
import "../../../public/css/boxPlatillos.css"
import {CardPlatillo} from "../CardPlatillo"
import {Header} from "../Header"
export function VistaPlatillo ( ){

    const [platillos, setPlatillo] = React.useState(null);
    React.useEffect( () => {
        const token = localStorage.getItem('x-access-token')
        axios.get(baseURL,{headers:{"x-access-token":token}}).then( (response) => {
        setPlatillo(response.data);
        console.log(response)

        });
    }, []);
    return (
        <div className="boxPlatillos">
            <Header/>
            <div className="postin">
    
    <div className='contmain'>
      <a href='/platillo' className='hiperv'>
        <div className='imgcont'>
          <img src={platillo.Imagen} alt="plato de comida" className='imag'/>
        </div>
        <div className='titlecont'>
          <p className='titlefood alltextarticle'>{platillo.Platillo}</p>
        </div>
        <div className='gentextcont'>
          <div className='text3cont'>
            <h2 className='dataact alltextarticle'>+{platillo.Calificacion}</h2>
            <p className='dataname alltextarticle'>Disponibles</p>
          </div>
          <div className='text3cont midtext'>
            <h2 className='dataact alltextarticle'>3 min</h2>
            <p className='dataname alltextarticle'>Llega en</p>
          </div>
          <div className='text3cont'>
            <h2 className='dataact alltextarticle'>⭐4.5</h2>
            <p className='dataname alltextarticle'>Calificación</p>
          </div>
        </div>
      </a>
     </div>
    </div> 
        </div>
    )
}