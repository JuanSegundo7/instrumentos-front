import React, {useContext} from "react";

import Context from "../userContext/userContext"
import Array from "../functions/arrayInstumentos"
import Fav from "../fav/fav"

import "./instrumentos.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Instrumento(props) {
  const {jwt, setJWT} = useContext(Context)
  
  let Favoritos = () => {
    if(!jwt){return(null)}else{return(<Fav id={props.id}></Fav>)}
  }

  if (props.precioDescuento !== 0) {
    return (
      <section id="instrument-body">
        <section id="detail-row" className="instrumentos-article">
          <article className="detail-der">
            <img
              src={`https://instumentos-back.herokuapp.com/${props.imagenes}`}
              alt={props.imagen}
            />
          </article>
          <article className="detail-izq">
            <p>{props.nombre}</p>
            <p>Fabricante: {props.fabricante}</p>
            <p className="precio-p">Precio Anterior: $ {props.precio}</p>
            <p className="descuento-p">
              ¡Precio con descuento: $ {props.precioDescuento}!
            </p>
            {/* <p>Descripcion:</p>
            <p>{props.texto}</p> */}
            <article className="flex-evenly">
              <Favoritos />
              <Link to="/"><FontAwesomeIcon icon="shopping-cart" className="button-login"/></Link>
            </article>
          </article>
        </section>
        <section id="description">
            <h3>Descripción</h3>
            <p>{props.texto}</p>
        </section>
        <section id='caracteristicas-section'>
          <h3>Caracteristicas</h3>
          <table id="caracteristicas">
            <tbody>
              <tr>
                <th className="blue">Marca</th>
                <td className="ligth-blue">{props.fabricante}</td>
              </tr>
              <tr>
                <th className="ligth-blue">Modelo</th>
                <td className="blue">{props.modelo}</td>
              </tr>
              <tr>
                <th className="blue">Año de salida</th>
                <td className="ligth-blue">{props.fecha}</td>
              </tr>
              <tr>
                <th className="ligth-blue">Color</th>
                <td className="blue">{props.color}</td>
              </tr>
            </tbody>
          </table>
          < Array id={props.id} />
        </section>
      </section>
    );
  } else {
    return (
      <section id="instrument-body">
        <section id="detail-row" className="instrumentos-article">
          <article className="detail-der">
            <img
              src={`https://instumentos-back.herokuapp.com${props.imagenes}`}
              alt={props.imagen}
            />
          </article>
          <article className="detail-izq">
            <p>{props.nombre}</p>
            <p>Fabricante: {props.fabricante}</p>
            <p>Precio: $ {props.precio}</p>
            {/* <p>Descripcion:</p>
            <p>{props.texto}</p> */}
            <article className="flex-evenly">
              <Favoritos />
              <Link to="/"><FontAwesomeIcon icon="shopping-cart" className="button-login"/></Link>
            </article>
          </article>
        </section>
        <section id="description">
          <h3>Descripción</h3>
          <p>{props.texto}</p>
        </section>
        <section id='caracteristicas-section'>
          <h3>Caracteristicas</h3>
          <table id="caracteristicas">
            <tbody>
              <tr>
                <th className="blue">Marca</th>
                <td className="ligth-blue">{props.fabricante}</td>
              </tr>
              <tr>
                <th className="ligth-blue">Modelo</th>
                <td className="blue">{props.modelo}</td>
              </tr>
              <tr>
                <th className="blue">Año de salida</th>
                <td className="ligth-blue">{props.fecha}</td>
              </tr>
              <tr>
                <th className="ligth-blue">Color</th>
                <td className="blue">{props.color}</td>
              </tr>
            </tbody>
          </table>
          < Array id={props.id} />
        </section>
      </section>
    );
  }
}

export default Instrumento;
