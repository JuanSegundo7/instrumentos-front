import React from 'react';
import "./instrumentos.css"

function Instrumento(props){
    if(props.precioDescuento !== 0){
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
    }else{
    return(
        <section className="instruments_table">
        <article className="instruments_tbody">
            <a href={`/instrumento/${props.id}`}>
                <article className="instrumento-inside">
                    <figure>
                        <img src={`https://instumentos-back.herokuapp.com${props.imagenes}`} alt={props.imagen}/>
                    </figure>
                    <p>{props.nombre}</p>
                    <p>Precio: $ {props.precio}</p>
                </article>
            </a>
            </article>
        </section>
    )
    }
}

export default Instrumento;