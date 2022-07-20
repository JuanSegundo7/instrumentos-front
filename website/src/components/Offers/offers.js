import React, { Component } from 'react';
import Instrumento from "./Instrumentos-ofertas"
import "../Instrumentos/instrumentos.css"
import { withRouter } from "react-router-dom";


class Offers extends Component {
    constructor(props){
        super(props);
        this.state = {
            offer: [],
        }
    };

    async componentDidMount(){

        try{
            let instrumentos = await fetch("https://instumentos-back.herokuapp.com/instrumentos/ofertas").then(response => response.json())
            
            this.setState({
                offer: instrumentos,
            });

        }
        catch(error){
            console.log(error);
        }
    }
    
    render(){
        console.log(this.state.offer)
        return(
            <article className="instrumentos-article instrumentos-ofertas">  
                {this.state.offer.map((instrumentos, i) => {
                    return <Instrumento
                    key={instrumentos + i}
                    id={instrumentos.id}
                    imagenes={instrumentos.imagenes[0].url_imagen}
                    nombre={instrumentos.nombre}
                    fabricante={instrumentos.fabricante}
                    // fecha={instrumentos.fecha}
                    precio={instrumentos.precio}
                    precioDescuento={instrumentos.precioDescuento}
                    />
                })}
            </article>
    )
    }
}



export default withRouter(Offers);