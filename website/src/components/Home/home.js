import React from 'react';
import "./home.css";
import InstrumentosApi from "../functions/apiFecth"
import SearchBar from "../functions/searchBar"
import Guitarrist from "./img/guitarrist-remove.png"


function Home(){

return(
        <section className="principal">
                <article id="flex-principal">
                    <article id="guitarrist" className="desktop-visible">
                        <figure>
                            <img src={Guitarrist} alt={Guitarrist} />
                        </figure>
                    </article>
                    <h1 className="home-title">COLOMBUS MUSIC.</h1>
                </article>
                <SearchBar />
        </section>
    )
}

export default Home;