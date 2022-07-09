import React, {useState} from 'react';
import "./header.css";
import "../burger/burger.css"
import {Link} from "react-router-dom"
import Burger from "../burger/burger"

/**** Icons *****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "./img/Colombo-logo.webp"


function Header(){

    const [value, setValue] = useState(false)

    
    let handleClick = () => {
        setValue(!value)
    }

    return(
        <header>
            <nav id="nav-sup">
                    <Link to="/">
                        <img src={Logo} className="Logo" alt="Logo"/>
                    </Link>
                    <article id="superior">
                    <Link to="/offers">
                            <li id="ofertas" className="desktop-visible">Ofertas</li>
                    </Link>
                    <Link to="/login">
                            <FontAwesomeIcon icon="user" className="logos desktop-visible"/>
                    </Link>
                    <Link to="/crear-instrumento">
                            <FontAwesomeIcon icon="guitar" className="logos desktop-visible"/>
                    </Link>
                    </article>
                    <ul className="mobile-visible ul-flex">
                        <article id="burger"onClick={handleClick} className={value ? "active" : null}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </article>
                    </ul>
            </nav>
            <nav className="desktop-visible" id="nav-inf">
                <ul id="categorias">
                    <article id="categorias-article">
                        <Link to="/instrumentos/guitarras"><li className="desktop-visible">Guitarras</li></Link>
                        <Link to="/instrumentos/bajos"><li className="desktop-visible">Bajos</li></Link>
                        <Link to="/instrumentos/teclados"><li className="desktop-visible">Teclados</li></Link>
                        <Link to="/instrumentos/baterias"><li className="desktop-visible">Baterias</li></Link>
                        <Link to="/instrumentos/microfonos"><li className="desktop-visible">Microfonos</li></Link>
                    </article>
                </ul>
            </nav>
            < Burger value={value} setValue={setValue} />
        </header>
    )
}

export default Header;