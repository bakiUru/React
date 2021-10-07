import React, { useState,useEffect } from "react";
import ServDetalle from "../components/ServDetalle/ServDetalle";
import { CircularProgress } from '@mui/material';


export default function Home(){
const [loader, setLoader]= useState(true)

useEffect(()=>{
    setTimeout(() => setLoader(false), 3000)
  }, []);
    return(
        
        <div>
            <h1>Home Services Detalles Vistoso</h1> 
            {loader ? <CircularProgress></CircularProgress> : <ServDetalle/>}
            
                
                     
                

            

            
        </div>
    );
}