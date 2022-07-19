import React, {useEffect, useContext, useState} from 'react';
import Context from "../userContext/userContext"
import useUser from '../hooks/useUser';
import jwtService from "jwt-decode"
import {useHistory} from 'react-router-dom';
import NoInstumentos from "./noInstrumentos"
import "./perfil.css"


const Perfil = () => {
    const {jwt} = useContext(Context)
    const {isLogged, logout} = useUser();
    const [instrumentos, setInstumentos] = useState();

    useEffect(() => {
        if (!isLogged) {
            history.push("/")
        }
    }, [isLogged])

    let history = useHistory()
    let user 
    let baseUrl 
    
    if(jwt !== null){
        user = jwtService(jwt.token)
        baseUrl = `http://localhost:5000/user/${user.id}/favs`
    }
    
    console.log(instrumentos, "instrumentos");
    console.log('====================================');
    console.log(jwt);
    console.log('====================================');

    useEffect( () => {
        if(!isLogged){
            console.log("no logueado");
        }else{
            fetch(baseUrl)
            .then(response => response.json())
            .then(data => setInstumentos(data))
            .catch(e => console.log(e))
        }
    }, [])


    const onSubmit = () => {
        logout()
    }

    if(instrumentos === undefined || jwt === null){
        return "Cargando..."
    }else{
        return (
        <section className="principal">
            <article id="perfil-datos">
                <h1 className="perfil-titulos">¡Hola {jwt.username}!</h1>
                <figure>
                    <img src={`http://localhost:5000${jwt.avatar}`}></img>
                </figure>
            </article>
            <h1 className="perfil-titulos-2">Estos son los instrumentos que guardaste</h1>
            <NoInstumentos instrumentos={instrumentos} />
            <article>
                <button className="button-login" onClick={onSubmit}> Desconectarse </button>
            </article>
        </section>
    );
    }
}

export default Perfil;
