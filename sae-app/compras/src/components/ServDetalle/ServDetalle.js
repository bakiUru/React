import React,{useState} from "react";
import ModalDetalle from "./modalServ";
import './ServDetalle.css'



const img = "https://source.unsplash.com/900x900/?italy,travel"


export default function ServDetalle(){
    const [servicios, setServicios] = useState(
        JSON.parse(localStorage.getItem("Servicios"))
    ) 
    
       
    return (

    <>
    
           {servicios.map((Vista, index)=> {

            
            return(
                <div className="home-vista" key={Vista.id}>
                    <div class="card-container">
                        <div class="card u-clearfix">
                            <div class="card-body">
                                <span class="card-number card-circle subtle">SAE</span>
                                <span class="card-author subtle">{Vista.vistaTit}</span>
                                <h2 class="card-title">{Vista.vistaAcc}</h2>
                                <span class="card-description subtle">{Vista.pieTit}</span>
                                <div class="card-read">CLick </div>

                           
                                <ModalDetalle id={servicios}/>
                          
                            </div>
                            {/* Dejo la const img de arriba, porque llamando a {Vista.img} donde esta la ruta que corresponde a cada servicio no funciona.*/ }
                            <img src= {img} alt="Foto" class="card-media" />

                        </div>
                        
                            <div class="card-shadow"></div>
                            

                
                    </div>

                    </div>    
            )
            })}
</>)}