import React from 'react';
import "./home.css";
import SearchBar from "../functions/searchBar"
import Flea from "./img/flea.png"
import Guitarrist from "./img/guitarrist-remove.png"
import {Link} from "react-router-dom"


function Home(){

return(
        <section className="principal">
                <article id="flex-principal">
                    <article id="guitarrist" className="desktop-visible">
                        <figure>
                            <Link to="/users">
                                <img src={Guitarrist} alt={Guitarrist}/>
                            </Link>
                        </figure>
                    </article>
                    <h1 className="home-title">COLOMBUS MUSIC.</h1>
                </article>
                <SearchBar />
        </section>
    )
}

export default Home;