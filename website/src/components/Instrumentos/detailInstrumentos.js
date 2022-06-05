import React, {Component} from 'react';
import Instrumento from "./Instrumento-detail"
import { withRouter } from "react-router";
import "./instrumentos.css"

class Detailinstrumentos extends Component {
    constructor(props){
        super(props);
        this.state = {
            instrumentosDetail: [] ,
        }
    };

    async componentDidMount(){
        try{
            const id = this.props.match.params.id;
            let instrumentos = await fetch(`http://localhost:5000/instrumentos/${id}`).then(response => response.json()).then(res => this.setState({instrumentosDetail: [res]}))
            
            console.log(instrumentos)
            this.setState({
                // id: id,
                instrumentoDetail: instrumentos
                
            });
            
            console.log(this.state.instrumentosDetail)
            
                // console.log(instrumentos)

            
        }
        catch(error){
            console.log(error);
        }
    }
    render(){
            let detail = this.state.instrumentosDetail
            console.log("holaaaa",detail)
            return(
                <article id="detail">  
                    {detail.map((instrumentos, i) => {
                        return <Instrumento
                        key={instrumentos + i}
                        id={instrumentos.id}
                        fabricante={instrumentos.fabricante}
                        imagenes={instrumentos.imagenes[0].url_imagen}
                        texto={instrumentos.texto}
                        color={instrumentos.color}
                        modelo={instrumentos.modelo}
                        fecha={instrumentos.fecha}
                        nombre={instrumentos.nombre}
                        precio={instrumentos.precio}
                        precioDescuento={instrumentos.precioDescuento}
                        />
                    })}
                </article>
        )
        }

}

export default withRouter(Detailinstrumentos);
