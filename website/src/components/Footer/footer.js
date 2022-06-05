import React from 'react';
import Logo from './img/Colombo-logo.webp'
import "./footer.css"

function Footer(){
    return(
        <footer>
            <nav id="nav-foot-sup">
                <img src={Logo} className="Logo" />
            </nav>
            <nav id="nav-foot-inf">

            </nav>
        </footer>
    )
}

export default Footer;