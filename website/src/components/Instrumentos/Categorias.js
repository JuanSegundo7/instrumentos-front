import React, {Component} from 'react';
import "./instrumentos.css"
import Instrumento from "./instrumento"
import { withRouter } from "react-router-dom";

class Categorias extends Component {
    constructor(props){
        super(props);
        this.state = {
            instrumentos: [],
            titulo: {},
            resultado: []
        }
    };

    async componentDidMount(){
        try{
            const category = this.props.match.params.category;
            
            let instrumentos = await fetch(`http://localhost:5000/${category}`).then(response => response.json())
            
            this.setState({
                instrumentos: instrumentos.instrumentos,
                titulo: instrumentos.titulo,                
            });

        }
        catch(error){
            console.log(error);
        }
    }
    render(){
        let titulo = this.state.titulo.nombre;
        let instrumentos = this.state.instrumentos
        return(
            <section className="principal">
            <h3 id="titulo">{titulo}</h3>
                    <article className="instrumentos-article">      
                    {instrumentos.map((instrumentos, i) => {
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
            </section>
            )
        }
    }

export default withRouter(Categorias);