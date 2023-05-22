import React from 'react';

import './postinstyle.css'

export function Postin() {

  return <div className="postin">
    
    <div className='contmain'>
      <a href='a' className='hiperv'>
        <div className='imgcont'>
          <img src="assets/mole.png" alt="plato de comida" className='imag'/>
        </div>
        <div className='titlecont'>
          <p className='titlefood alltextarticle'>Mole verde con arroz, pechuga y muslo</p>
        </div>
        <div className='gentextcont'>
          <div className='text3cont'>
            <h2 className='dataact alltextarticle'>+3</h2>
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
}