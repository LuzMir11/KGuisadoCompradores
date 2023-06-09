import React from 'react';

import './receptstyle.css'

export function Recept() {

  return <div className="reception">

    <div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='contimginp'>
            <img src="assets/comida.png" alt="imagen de comida" className='imgrecept'/>
          </div>
          <div className='conttextinp'>
            <h1 className='titleless textinp'>¿Qué quieres comer hoy?</h1>
            <p className='parrafou textinp'> Enchiladas, tacos dorados, pozole, mole verde. Descubre un mundo de platillos deliciosos.</p>
            <div className='contbuton'>
              <button class="butoninp">¡Buscar ahora!</button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div>
      <article className='contart contartpar'>
        <div className='contaline'>
          <div className='conttextpar'>
            <h1 className='titleless textpar'>¿Eres un buen cocinero?</h1>
            <p className='parrafou textpar'> Únete a nuestro grupo de chefs y comienza a ofrecer tu deliciosa comida.</p>
            <div className='contbuton'>
              <button class="butonpar">¡Quiero vender!</button>
            </div>
          </div>
          <div className='contimgpar'>
            <img src="assets/seniora.png" alt="imagen de personas" className='imgrecept'/>
          </div>
        </div>
      </article>
    </div>

    <div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='contimginp'>
            <img src="assets/reparte.png" alt="imagen de personas" className='imgrecept'/>
          </div>
          <div className='conttextinp'>
            <h1 className='titleless textinp'>¿Tienes bici o moto?</h1>
            <p className='parrafou textinp'> Usa tu tiempo libre para ganar dinero con nosotros.</p>
            <div className='contbuton'>
              <button class="butoninp">¡Quiero repartir!</button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div>
      <article className='contart contartpar'>
        <div className='contaline'>
          <div className='conttextpar'>
            <h1 className='titleless textpar'>¡kguisado al rescate de alimentos!</h1>
            <p className='parrafou textpar'> Entérate sobre nuestro proyecto y el cambio que realizamos día a día.</p>
            <div className='contbuton'>
              <button class="butonpar">Aprende más</button>
            </div>
          </div>
          <div className='contimgpar'>
          <img src="assets/rescue.png" alt="verduras dentro de un frasco" className='imgrecept'/>
          </div>
        </div>
      </article>
    </div>


  </div> 
}
