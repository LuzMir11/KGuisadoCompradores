import React from "react";
import { Header } from "../componetns/Header";
import { BoxPlatillos } from "./BoxPlatillos";
import { VistaPrincipal } from "./VistaPrincipal";
import { SocialPage } from "./SocialPage";
export  function Main(){
    return(
        <div>
            <Header/>
            <h1>Hola soy David</h1>
            <VistaPrincipal/>
        </div>
    )
}