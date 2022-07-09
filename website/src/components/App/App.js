import "./App.css"
import React from 'react';
import Switch from "../Switch/switch"
import Header from "../Header/header";
import Footer from "../Footer/footer";
import {BrowserRouter as Router} from "react-router-dom";

/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faBars, faGuitar, faUser} from '@fortawesome/free-solid-svg-icons'

library.add(fas, faBars, faGuitar, faUser)

function App() {
  return (
    <Router>
        <Header />
          <main>
          <svg id="visual" viewBox="0 0 1500 300" className="desktop-visible" width="1500" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1500" height="300" fill="#23262A"></rect><path d="M0 255L22.7 239.7C45.3 224.3 90.7 193.7 136.2 195.5C181.7 197.3 227.3 231.7 272.8 227.3C318.3 223 363.7 180 409 148.2C454.3 116.3 499.7 95.7 545.2 106.8C590.7 118 636.3 161 681.8 185.8C727.3 210.7 772.7 217.3 818.2 194.5C863.7 171.7 909.3 119.3 954.8 104C1000.3 88.7 1045.7 110.3 1091 132.2C1136.3 154 1181.7 176 1227.2 203.3C1272.7 230.7 1318.3 263.3 1363.8 253.3C1409.3 243.3 1454.7 190.7 1477.3 164.3L1500 138L1500 0L1477.3 0C1454.7 0 1409.3 0 1363.8 0C1318.3 0 1272.7 0 1227.2 0C1181.7 0 1136.3 0 1091 0C1045.7 0 1000.3 0 954.8 0C909.3 0 863.7 0 818.2 0C772.7 0 727.3 0 681.8 0C636.3 0 590.7 0 545.2 0C499.7 0 454.3 0 409 0C363.7 0 318.3 0 272.8 0C227.3 0 181.7 0 136.2 0C90.7 0 45.3 0 22.7 0L0 0Z" fill="#1d2023" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            <section id="section-app">
              <Switch />
            </section>
          </main>
        <Footer/>
    </Router>  
  );
}

export default App;
