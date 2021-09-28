import React from "react";
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ServHogar from "../Pages/ServHogar";
import ServComDepor from "../Pages/ServComDepor";
import ServAgro from "../Pages/ServAgro";
import ServHidro from "../Pages/ServHidro";
import ServCanna from "../Pages/ServCanna";
import Error404 from "../Pages/Error404";

export default function ServPages(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact  path="/servpages/hogars" component={ServHogar}>
                </Route>
                <Route  path="/servpages/cdeportivs" component={ServComDepor}>
                </Route>
                <Route  path="/servpages/agros" component={ServAgro}>
                </Route>
                <Route  path="/servpages/Hidros" component={ServHidro}>
                </Route>
                <Route  path="/servpages/cannas" component={ServCanna}>
                </Route>
                <Route  path="*" component={Error404}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}