import React, {useEffect} from 'react';
import "./carrito.css"
import { withRouter } from "react-router-dom";


const Carrito = () => {

    useEffect(async () => {
        try{
            const id = this.props.match.params.id;
            console.log(id);
            await fetch(`https://instumentos-back.herokuapp.com/instrumentos/all`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        }catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    },[])

    return (
        <section id="contenedor-cart">
            <article id="carrito">
                <ul>
                    <li>Productos</li>
                    <li>Cantidad</li>
                    <li>Precio</li>
                </ul>
            </article>
        </section>
    );
}

export default withRouter(Carrito);
