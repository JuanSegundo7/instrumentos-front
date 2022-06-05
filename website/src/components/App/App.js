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
            <section id="margin-color">
              <Switch />
            </section>
          </main>
          <Footer />
    </Router>  
  );
}

export default App;
