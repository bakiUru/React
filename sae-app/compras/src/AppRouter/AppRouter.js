import React,{useState,useEffect} from "react";
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Error404 from "../Pages/Error404";
import ServCompra from "../components/ServCompra/ServCompra";
import NavBar from "../components/NavBar/NavBar";


export default function AppRouter(){
    
  const [fixedScroll, setFixedScroll] = useState(false)
  useEffect(()=>{
  function onScrollWindow(){
      if(window.scrollY > 161)
          setFixedScroll(true)
      else
          setFixedScroll(false)
      
  }

  window.addEventListener("scroll",onScrollWindow)
},[])
    return(
        <BrowserRouter>
            <NavBar fixed={fixedScroll}/>
               <Switch>
                <Route exact  path="/" component={Home}>
                </Route>
                <Route  path="/contacto" component={Contacto}>
                </Route>
                <Route  path="/servpages/:servicioId" component={ServCompra}>
                </Route>
                <Route  path="*" component={Error404}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}