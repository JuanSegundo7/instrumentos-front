import React from 'react';
import Logo from './img/Colombo-logo.webp'
import "./footer.css"

function Footer(){
    return(
        <footer>
            <svg id="visual-1" viewBox="0 0 1500 600" className="position" width="1500" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1500" height="600" fill="#1d2023"></rect><path d="M0 459L27.8 413.8C55.7 368.7 111.3 278.3 166.8 274.7C222.3 271 277.7 354 333.2 363.5C388.7 373 444.3 309 500 261.7C555.7 214.3 611.3 183.7 666.8 206.7C722.3 229.7 777.7 306.3 833.2 365.2C888.7 424 944.3 465 1000 483.8C1055.7 502.7 1111.3 499.3 1166.8 447.3C1222.3 395.3 1277.7 294.7 1333.2 248.5C1388.7 202.3 1444.3 210.7 1472.2 214.8L1500 219L1500 0L1472.2 0C1444.3 0 1388.7 0 1333.2 0C1277.7 0 1222.3 0 1166.8 0C1111.3 0 1055.7 0 1000 0C944.3 0 888.7 0 833.2 0C777.7 0 722.3 0 666.8 0C611.3 0 555.7 0 500 0C444.3 0 388.7 0 333.2 0C277.7 0 222.3 0 166.8 0C111.3 0 55.7 0 27.8 0L0 0Z" fill="#23262a" strokeLinecap="round" strokeLinejoin="miter"></path></svg>           
            <nav id="nav-foot-sup">
                <img src={Logo} className="Logo" />
            </nav>
            <nav id="nav-foot-inf">
            </nav>
        </footer>
    )
}

export default Footer;