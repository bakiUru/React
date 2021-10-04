import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Servicios from "../Servicios/Servicios";

export default function ServCompra(){

    const {servicioId} = useParams()
    return(
        <>  
            <Typography variant="h3" component="h3">Agrega el Servicio a tu Carro de Compras</Typography>

            <p>Id de producto: {servicioId}</p>
            <Servicios id={servicioId}/>
        </>
    )
}