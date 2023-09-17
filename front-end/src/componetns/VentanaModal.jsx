import React from 'react';
import "../../public/css/Modal.css";
import styled from 'styled-components';

export function VentanaModal({children, estado, cambiarEstado}){
    return(
        <>
            {estado &&
                <div className="Overlay">
                    <div className="containerModal">
                        <div className="headerModal">
                            <h3>Titulo</h3>
                        </div>
                        
                        <button className="btnClose">
                            <h3>x</h3>
                        </button>
                        <h1>Contenido</h1>
                        {children}
                    </div>
                </div>
            }
        </>

    )

}
