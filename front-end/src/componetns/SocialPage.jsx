import React from 'react';

import '../../public/css/socialpage.css'

export function SocialPage() {

  return <div className="social">

    <div>
      <article className='art1 imp'>
        <div className='contaline'>
          <div className='contimginp'>
            <img src="assets/comida.png" alt="imagen de comida" className='imgrecept'/>
          </div>
          <div className='conttextinp'>
            <h1 className='titleless textinp'>¿Qué quieres comer hoy?</h1>
            <p className='parrafou textinp'> Enchiladas, tacos dorados, pozole, mole verde. Descubre un mundo de platillos deliciosos.</p>
            <div className='contbuton'>
              <a href="/platillos"class="butoninp">¡Buscar ahora!</a>
            </div>
          </div>
        </div>
      </article>
    </div>

  </div> 
}