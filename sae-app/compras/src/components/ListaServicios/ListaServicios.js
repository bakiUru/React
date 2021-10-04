import React, {useState,useEffect} from "react";
import Servicios from "../Servicios/Servicios.js"; 


export default function ListaServicios (){
 /* 
    const [servId, SetservId] = useState();

    useEffect(()=>{
    var url = window.location.pathname;
    
    
    if (url.match("hogars"))
        SetservId(0);
    if (url.match("cdeportivs"))
        SetservId(1);  
    if (url.match("agros"))
        SetservId(2);
    if (url.match("hidros"))
        SetservId(3);
    if (url.match("cannas"))
        SetservId(4);
                
        
    },[servId])
   */ 

    return(
        <div>
        <Servicios></Servicios>
        </div>
    );
 
} 
