import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../Home/home";
import Login from "../Login/login";
import Cart from "../carrito/carrito";
import Perfil from "../perfil/perfil";
import Register from "../Register/register";
import FormObject from "../FormObject/formObject"
import Categorias from "../Instrumentos/Categorias"
import UserVisitante from "../perfil/perfilVisitante"
import AllUsers from "../allUsers/allUsers"
import Offers from "../Offers/offers"
import Detail from "../Instrumentos/detailInstrumentos"
import Error from "../error404/error"

function SwitchLinks(){
    // let user = props.user
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={AllUsers} />
            <Route path="/offers" component={Offers} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/carrito" render={props => <Cart key={props.match.params.id || 'empty'} />} />
            <Route path="/crear-instrumento" component={FormObject} />
            <Route path="/login" component={Login} />
            <Route path="/user/:id" render={props => <UserVisitante key={props.match.params.id || 'empty'} /> } />
            <Route path="/register" component={Register} />
            <Route path="/instrumentos/:category" render={props => <Categorias key={props.match.params.category || 'empty'} /> } />
            <Route path="/instrumento/:id" render={props => <Detail key={props.match.params.id || 'empty'} detail={true} /> } />
            <Route path="" component={Error} />
            <Route path="*" component={Error} />
        </Switch>
    );
}

export default SwitchLinks;