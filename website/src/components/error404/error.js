import React from 'react';
import "./error.css"

function error(){
    return(
        <main>
            <section id="error">
                <h1>Pagina no encontrada :(</h1>
                <h3>La pagina que buscate no existe, por favor intentalo de nuevo</h3>
                <a href="/" className="button">Volver</a>
            </section>
        </main>
    )
}

export default error;