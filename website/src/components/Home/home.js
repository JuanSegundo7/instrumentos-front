import React from 'react';
import "./home.css";
import Instrumentos from "../Instrumentos/apiInstrumentos"
import Guitarrist from "./img/guitarrist-remove.png"


function Home(){

return(
            <section className="margin-sections principal">
                <h1>Bienvenidos a Colombo Music</h1>
                <article id="flex-principal">
                    <article id="guitarrist" className="desktop-visible">
                        <figure>
                            <img src={Guitarrist} alt={Guitarrist} />
                        </figure>
                    </article>
                </article>
                <article id="Instrumentos">
                    <Instrumentos />
                </article>
            </section>
    )
}

export default Home;