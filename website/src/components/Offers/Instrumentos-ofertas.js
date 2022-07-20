import React from 'react';
import "../Instrumentos/instrumentos.css"

function Instrumento(props){
    return(
        <section className="instruments_table">
        <article className="instruments_tbody">
        <a href={`/instrumento/${props.id}`}>
            <article className="instrumento-inside">
                <figure>
                    <img src={`https://instumentos-back.herokuapp.com${props.imagenes}`} alt={props.imagen}/>
                </figure>
                <p>{props.nombre}</p>
                <p className="precio-p">Precio Anterior: $ {props.precio}</p>
                <p className="descuento-p">¡Precio con descuento: $ {props.precioDescuento}!</p>
            </article>
        </a>
        </article>
    </section>
    )
}

export default Instrumento;