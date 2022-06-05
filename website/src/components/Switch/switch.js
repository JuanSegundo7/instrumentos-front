import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from "../Home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import FormObject from "../FormObject/formObject"
import Categorias from "../Instrumentos/Categorias"
import Offers from "../Offers/offers"
import User from "../user/user"
import Detail from "../Instrumentos/detailInstrumentos"
import Error from "../error404/error"



function SwitchLinks(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/offers" component={Offers} />
            <Route path="/crear-instrumento" component={FormObject} />
            <Route path="/login" component={Login} />
            <Route path="/user/:id" render={props => <User key={props.match.params.id || 'empty'} /> } />
            <Route path="/register" component={Register} />
            <Route path="/instrumentos/:category" render={props => <Categorias key={props.match.params.category || 'empty'} /> } />
            <Route path="/instrumento/:id" render={props => <Detail key={props.match.params.id || 'empty'} /> } />
            <Route path="" component={Error} />
            <Route path="*" component={Error} />
        </Switch>
    );
}

export default SwitchLinks;