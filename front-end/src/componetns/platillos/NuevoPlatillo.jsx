import React from "react";
import {useForm} from "react-hook-form";
import {Header} from "../Header";
import { PlatilloForm } from "./PlatilloForm";

export function NuevoPlatillo (){
   
    return <>
        <Header/> 
        <PlatilloForm/>
        </>
}