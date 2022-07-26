import React from 'react';
import "./instrumentos.css"
import errorImage from '../Home/img/error.webp'

function Instrumento(props){
    if(props.precioDescuento !== 0){
        console.log('====================================');
        console.log(props.imagenes);
        console.log('====================================');
        return(
            <section className="instruments_table">
            <article className="instruments_tbody">
                <a href={`/instrumento/${props.id}`}>
                    <article className="instrumento-inside">
                        <figure>
                            <img src={props.imagenes === undefined ? errorImage : `https://instumentos-back.herokuapp.com${props.imagenes}`} alt={props.nombre}/>
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