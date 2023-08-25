import React from 'react';
import '../../public/css/platilloCard.css'

export function CardPlatillo({platillos}) {


  if (!platillos) return null;
  const cardsPlatillos = platillos.map( platillo => (
    <div className="postin">
    
    <div className='contmain'>
      <a href="" className='hiperv'>
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
  ))
 
  
  return <>{cardsPlatillos}</>;
  

  
}
