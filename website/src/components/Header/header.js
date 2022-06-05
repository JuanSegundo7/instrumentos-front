import React, {useState} from 'react';
import "./header.css";
import {Link} from "react-router-dom"

/**** Icons *****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cruz from "./img/cross.svg"
import Logo from "./img/Colombo-logo.webp"

function Header(){

    const [showMenu, setShowMenu] = useState(false)

    let menu

    let salir = <img src={Cruz} id="cruz" alt="cruz" onClick={() => setShowMenu(false)} />

    if(showMenu === true) {
        menu = 
            <article className="menu-mobile">
                <article id="flex-cruz">
                        { salir }
                </article>
                <img src={ Logo} />
                <article id="flex-menu">
                        <Link to="/login"><li>Login</li></Link>
                        <Link to="/register"><li>Register</li></Link>
                        <Link to="/crear-instrumento"><li>Crear instrumentos</li></Link>
                </article>
            </article>
    }

    // menu.onClick = () => burguer.classList.remove("menu-mobile-1") + burguer.classList.add("menu-mobile")

    return(
        <header>
            <nav id="nav-sup">
                {/* <div id="background-nav"> */}
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
                    <FontAwesomeIcon icon="bars" id="burguer" className="mobile-visible" onClick={() => setShowMenu(!showMenu)}/>
                {/* </div> */}
            { menu }
            </nav>
            <nav className="desktop-visible" id="nav-inf">
                <ul >
                    <article>
                        <Link to="/instrumentos/guitarras"><li className="desktop-visible">Guitarras</li></Link>
                        <Link to="/instrumentos/bajos"><li className="desktop-visible">Bajos</li></Link>
                        <Link to="/instrumentos/teclados"><li className="desktop-visible">Teclados</li></Link>
                        <Link to="/instrumentos/baterias"><li className="desktop-visible">Baterias</li></Link>
                        <Link to="/instrumentos/microfonos"><li className="desktop-visible">Microfonos</li></Link>
                    </article>
                </ul>
            </nav>
        </header>
    )
}

export default Header;