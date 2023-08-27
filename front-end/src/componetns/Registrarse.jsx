import React from "react";
import { RegistrarseForm } from "./RegistrarseForm";
import { Header } from "./Header";

export function Registrarse (){

   return <>    
    <Header/>
    <div><RegistrarseForm link={"http://localhost:3000/api/usuaros"}/></div>
    </>

}