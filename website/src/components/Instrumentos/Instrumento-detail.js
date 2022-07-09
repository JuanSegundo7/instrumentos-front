import React, {useState} from "react";
import "./instrumentos.css";
import Array from "../functions/arrayInstumentos"
import {Link} from "react-router-dom"


function Instrumento(props) {
  if (props.precioDescuento !== 0) {
    return (
      <section id="instrument-body">
        <section id="detail-row" className="instrumentos-article">
          <article className="detail-der">
            <img
              src={`http://localhost:5000${props.imagenes}`}
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
            <Link to={`/carrito/${props.id}`}><button id="button-detail" className="button-login" numero={props.id}>Comprar</button></Link>
          </article>
        </section>
        <section id="description">
          <article>
            <h3>Descripción</h3>
            <span></span>
          </article>
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
              src={`http://localhost:5000${props.imagenes}`}
              alt={props.imagen}
            />
          </article>
          <article className="detail-izq">
            <p>{props.nombre}</p>
            <p>Fabricante: {props.fabricante}</p>
            <p>Precio: $ {props.precio}</p>
            {/* <p>Descripcion:</p>
            <p>{props.texto}</p> */}
            <Link to="/carrito"><button id="button-detail" className="button-login" numero={props.id}>Comprar</button></Link>
          </article>
        </section>
        <section id="description">
          <article>
            <h3>Descripción</h3>
            <span></span>
          </article>
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
