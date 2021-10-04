
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter/AppRouter';


function App(){



 const listaServicios = new Promise((resolve) =>{

    setTimeout(()=>{
    const respuesta =[

            {id: 1, name: 'Hogar',  texto: "RIEGO HOGAR", desc: "Tu Jardin como nunca, gracias a los tipos de implementaciones que hemos creado cuidaremos tu jardin y tu boilsillo sin gastar de mas y cuidando cada aspecto del cesped.", vistaTit: "Automatismo Hogar", pieTit: "Riego Automatizado Ahorre en Recursos, Tiempo, el resultado es el Jardín de sus Sueños", vistaAcc: "Riego Jardines",  img:  '../assets/img/JardinCard.jpg'},
            {id: 2, name: 'Complejo Deportivo', texto: "RIEGO Complejos Deportivos", desc: "En estos momentos unas canchas de ensueño haran la diferencia, frente a la gran competencia que se ha generado en el ambiente del deporte. Profesional como Amateur", vistaTit: "Automatismo Complejo Deportivo", pieTit: "Como Canchas Profesionales, cesped fuerte y sano.",vistaAcc: "Canchas de Lujo", img: '../assets/img/complejoDeportivoCard.jpg'},
            {id: 3, name: 'Agro',  texto: "RIEGO Agro", desc: "En el agro el principal recurso que da vida a este negocio es el Agua, por este motivo los invitamos a implementar una tecnologia que facilitatra y ahorrara el recurso mas preciado.", vistaTit: "Automatismo Agro", pieTit: "Programe de forma Eficaz el riego de sus cultivos.",vistaAcc: "Agro Inteligente", img:  "../../assets/img/AgroCard.jpg"},
            {id: 4, name: 'Hidroponia', texto: "Sistemas Cultivo Hidroponicos", desc: "El cultivo Hidroponico esta en augue debido a los avances tecnologicos y el deseo de las personas por generar nuevas fuentes de alimentos confiables", vistaTit: "Cultivo Hidroponico", pieTit: "Controle las variables que mejoran su producción", vistaAcc: "Nutrición a Otro Nivel", img:  '../../assets/img/HidropoCard.jpg'},
            {id: 5, name: 'Cannabis', texto: "Sistemas Cultivo Cannabis", desc: "Distintas Tecnicas se han desarrollado que convierten tu cultivo en un area profesional, logrando el mayor rendimiento y calidad", vistaTit: "Cultivo Cannabico", pieTit: "Convierta su Indoor en un Laboratorio, con el control total de ambiente.", vistaAcc: "Sólo Ricas Cosas",img:  '../assets/img/CannabisCard.jpg'}

    ]
        resolve(respuesta)
        }, 3000)

    })

const listaInstalacion = new Promise((resolve)=>{
    setTimeout(()=>{

        const respuesta = [
        {id: 1, inst:  ["Riego","Completo/Auxiliares","Energias Renovables"]}, 
        {id: 2, tServ: ["Simple/Instalacion","Automatizado"]}, 
        {id: 3, SCADA: ["APP/WEB","Historial/Monitoreo", "NO"]},
    ]
    
    resolve(respuesta)
    }, 2000)    
})

listaServicios.then((data)=>{
    console.log("Respuesta: ",JSON.stringify(data));
    localStorage.setItem("Servicios", JSON.stringify(data))
    })

listaInstalacion.then((data)=>{
      console.log("Respuesta: ",JSON.stringify(data));
      localStorage.setItem("listaInstalacion", JSON.stringify(data))
      })


  return (
    <div className="App">
      <AppRouter>
      </AppRouter>
      
  </div>
    );

}


export default App;
