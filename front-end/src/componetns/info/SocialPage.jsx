import React from 'react';
import { Header } from "../Header";

import '../../../public/css/socialpage.css'

export function SocialPage() {

  return <div className="social">
     <Header/>
     
<div>
      <article className='contart'>
        <div className='contaline'>
            <img src="assets/socialpage.png"alt="Imagen baner" className='imagenbaener'/>
        </div>
      </article>
</div>

<div>
      <article className='centertext'>
        <div className='contaline'>
            <p className='parrafou textinp'> Actuar en favor de la economía de las amas de casa y los sectores vulnerables. 
              Marcamos la diferencia en la vida de las personas que usan nuestra plataforma ofreciendo flexibilidad y buen servicio.</p>
          </div>
      </article>
</div>

<div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='textytitle'>
          <h3 className='titleless'>Apoyamos a las amas de casa</h3>
            <p className='parrafou'> Nuestra plataforma permite a las amas de casa y madres solteras ofrecer su comida recíen preparada para que puedan generar dinero sin afectar sus actividades del día a día.
            </p>
          </div>
        </div>
      </article>
</div>

<div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='conttextpar'>
            <h2 className='titleless textinpar'>Este año aportamos</h2>
            <h2 className='titleless textinpar'>$344 MXN</h2>
            <p className='parrafou textinpar'> Ayudando a:
            <br />
            2
            <br />
            amas de casa</p>
          </div>

          <div className='contimgpar'>
            <img src="assets/SocialP1.png" alt="imagen de personas" className='imgrecept'/>
          </div>
          
        </div>
      </article>
</div>


    <div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='conttextinpar'>
          <h3 className='titleless textinpar'>Ayudando a sectores vulnerables</h3>
            <p className='parrafou textinpar'> Empleamos un modelo de repartidores flexibles para que los estudiantes y 
                                              gente de escasos recursos puedan participar. 
                                              De esta forma pueden usar su tiempo libre para generar un ingreso extra.

            </p>
          </div>
        </div>
      </article>
    </div>

<div>
      <article className='contart contartinp'>
        <div className='contaline'>
          <div className='conttextpar'>
            <h2 className='titleless textinpar'>Este año apoyamos a</h2>
            <h2 className='titleless textinpar'>3</h2>
            <p className='parrafou textinpar'> Estudiantes para que puedan seguir con sus estudios.</p>
          </div>

          <div className='contimgpar'>
            <img src="assets/estudiante.png" alt="imagen de personas" className='imgrecept'/>
          </div>
          
        </div>
      </article>
</div>

<div>
      <article className='contart contartinpar'>
        <div className='contaline'>

          <div className='contimginpar'>
            <img src="assets/socialfoot.png" alt="imagen de personas" className='imgrecept'/>
          </div>
        </div>
      </article>
</div>

</div>
}