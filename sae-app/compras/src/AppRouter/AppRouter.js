import React from "react";
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import ServPages from './ServPages';
import Error404 from "../Pages/Error404";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact  path="/" component={Home}>
                </Route>
                <Route  path="/contacto" component={Contacto}>
                </Route>
                <Route  path="/servpages" component={ServPages}>
                </Route>
                <Route  path="*" component={Error404}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}