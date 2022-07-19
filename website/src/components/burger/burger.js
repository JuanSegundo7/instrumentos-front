import React, {} from 'react';
import {Link} from "react-router-dom"
import useUser from "../hooks/useUser"
import "./burger.css"


const Burger = (props) => {
    let value = props.value
    let setValue = props.setValue
    const {isLogged} = useUser()

    if(!isLogged) {
        return (
        <nav id="mobile-nav" className={props.value ? "is-active" : null}>
            <article>
                    <Link to="/login" onClick={() => setValue(!value)}>Login</Link>
                    <Link to="/instrumentos/guitarras" onClick={() => setValue(!value)}>Guitarras</Link>
                    <Link to="/instrumentos/bajos" onClick={() => setValue(!value)}>Bajos</Link>
                    <Link to="/instrumentos/teclados" onClick={() => setValue(!value)}>Teclados</Link>
                    <Link to="/instrumentos/baterias" onClick={() => setValue(!value)}>Baterias</Link>
                    <Link to="/instrumentos/microfonos" onClick={() => setValue(!value)}>Microfonos</Link>
            </article>
        </nav>
    );
    }else{
        return (
            <nav id="mobile-nav" className={props.value ? "is-active" : null}>
                <article>
                        <Link to="/perfil" onClick={() => setValue(!value)}>Perfil</Link>
                        <Link to="/instrumentos/guitarras" onClick={() => setValue(!value)}>Guitarras</Link>
                        <Link to="/instrumentos/bajos" onClick={() => setValue(!value)}>Bajos</Link>
                        <Link to="/instrumentos/teclados" onClick={() => setValue(!value)}>Teclados</Link>
                        <Link to="/instrumentos/baterias" onClick={() => setValue(!value)}>Baterias</Link>
                        <Link to="/instrumentos/microfonos" onClick={() => setValue(!value)}>Microfonos</Link>
                </article>
            </nav>
        );
    }
}


export default Burger;
