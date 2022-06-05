import React, {Component} from 'react';
import Instrumento from "./instrumento"
import "./instrumentos.css"

class Instrumentos extends Component {
    constructor(props){
        super(props);
        this.state = {
            instrumentos: [],
            resultado: []
        }
    };

    async componentDidMount(){

        try{
            let instrumentos = await fetch("http://localhost:5000/instrumentos/all").then(response => response.json())
            this.setState({
                instrumentos: instrumentos.instrumentos,    
            });
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        let {instrumentos} = this.state 
        return(
            <section>
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

// }

export default Instrumentos;