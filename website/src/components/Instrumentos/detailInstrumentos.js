import React, {Component} from 'react';
import Instrumento from "./Instrumento-detail"
import { withRouter } from "react-router-dom";
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
            
            this.setState({
                instrumentoDetail: instrumentos,                
            });
            
            
            
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
            let detail = this.state.instrumentosDetail
            return(
            <React.Fragment>
                <svg id="visual" className="desktop-visible" viewBox="0 0 1300 200" width="1300" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1300" height="200" fill="#fff"></rect><path d="M0 54L21.7 46.2C43.3 38.3 86.7 22.7 130 26.7C173.3 30.7 216.7 54.3 260 68C303.3 81.7 346.7 85.3 390 74.8C433.3 64.3 476.7 39.7 520 28.7C563.3 17.7 606.7 20.3 650 32.8C693.3 45.3 736.7 67.7 780 77.3C823.3 87 866.7 84 910 71.5C953.3 59 996.7 37 1040 32.3C1083.3 27.7 1126.7 40.3 1170 51.5C1213.3 62.7 1256.7 72.3 1278.3 77.2L1300 82L1300 0L1278.3 0C1256.7 0 1213.3 0 1170 0C1126.7 0 1083.3 0 1040 0C996.7 0 953.3 0 910 0C866.7 0 823.3 0 780 0C736.7 0 693.3 0 650 0C606.7 0 563.3 0 520 0C476.7 0 433.3 0 390 0C346.7 0 303.3 0 260 0C216.7 0 173.3 0 130 0C86.7 0 43.3 0 21.7 0L0 0Z" fill="#23262a" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
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
                <svg id="visual" className="desktop-visible" viewBox="0 0 1300 200" width="1300" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1300" height="200" fill="#23262a"></rect><path d="M0 54L21.7 46.2C43.3 38.3 86.7 22.7 130 26.7C173.3 30.7 216.7 54.3 260 68C303.3 81.7 346.7 85.3 390 74.8C433.3 64.3 476.7 39.7 520 28.7C563.3 17.7 606.7 20.3 650 32.8C693.3 45.3 736.7 67.7 780 77.3C823.3 87 866.7 84 910 71.5C953.3 59 996.7 37 1040 32.3C1083.3 27.7 1126.7 40.3 1170 51.5C1213.3 62.7 1256.7 72.3 1278.3 77.2L1300 82L1300 0L1278.3 0C1256.7 0 1213.3 0 1170 0C1126.7 0 1083.3 0 1040 0C996.7 0 953.3 0 910 0C866.7 0 823.3 0 780 0C736.7 0 693.3 0 650 0C606.7 0 563.3 0 520 0C476.7 0 433.3 0 390 0C346.7 0 303.3 0 260 0C216.7 0 173.3 0 130 0C86.7 0 43.3 0 21.7 0L0 0Z" fill="#fff" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            </React.Fragment>
        )
        }

}

export default withRouter(Detailinstrumentos);
