import React from "react";
import { Header } from "../componetns/Header";
import { BoxPlatillos } from "./BoxPlatillos";
import { VistaPrincipal } from "./VistaPrincipal";
export  function Main(){
    return(
        <div>
            <Header/>
            <VistaPrincipal/>
        </div>
    )
}