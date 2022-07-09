import React, {useEffect, useState} from 'react';
import Instrumento from "../Instrumentos/instrumento"


const ArrayInstumentos = (props) => {
    let [instrumentosApi, setInstumentos] = useState("")
    let array = instrumentosApi.instrumentos
    let contenedor = []
    let id = props.id

    
    useEffect(async () => {
        try{
            await fetch(`http://localhost:5000/instrumentos/all`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setInstumentos(data))
        }catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    },[])
    
    // console.log(array)
    
    if(array === undefined){
        return <p>Cargando...</p>
    }else{
        // let random = Math.floor(Math.random() * array.length)
        // agregando aleatorios a randomNumbers
        while(contenedor.length < 3) {
            const randomIndex = getRandom()
            if(!checkNotRepeat(array[randomIndex], contenedor)){
                contenedor.push(array[randomIndex])
            }
        }

        // obteniendo aleatorios en rango
        function getRandom() {
                return Math.floor(Math.random() * array.length)
        }

        // checkeando por no repetidos
        function checkNotRepeat(current, validNumbers) {
                return validNumbers.includes(current)
        }
    }
    


    return (
        <section id="margin-mobile">
            <article className="instrumentos-article">      
            {contenedor.map((instrumentos, i) => {
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
    );
}

export default ArrayInstumentos;
