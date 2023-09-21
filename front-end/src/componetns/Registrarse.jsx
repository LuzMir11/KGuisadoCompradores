import React from "react";
import { RegistrarseForm } from "./RegistrarseForm";
import { Header } from "./Header";

export function Registrarse (){

   return <>    
    <Header/>
    <div><RegistrarseForm link={import.meta.env.VITE_LOCAL_SERVER+"/api/usuario"}/></div>
    </>

}