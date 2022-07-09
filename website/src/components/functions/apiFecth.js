import React, {useState, useEffect} from 'react';
import Instrumento from "../Instrumentos/instrumento"

const ApiFecth = (props) => {
    let [instrumentosApi, setInstumentos] = useState("")
    let nuevoArray
    let array = instrumentosApi.instrumentos
    let marca = props.marca.toLowerCase()

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

        
    if(array === undefined){
        return <p>Cargando...</p>
    }else{
        nuevoArray = array.filter(instrumento => {
            if(instrumento.nombre.toLowerCase().includes(marca)){
                return instrumento
            }else{
                return instrumento.fabricante === marca
            }
        })

    if(nuevoArray.length === 0){
        return(<h1 id='noEncontro'>NO SE ENCONTRO EL INSTRUMENTO QUE BUSCAS</h1>)
    }else{

        
        return(
            <section id='margin-mobile'>
            <article className="instrumentos-article margin-relative">      
            {nuevoArray.map((instrumentos, i) => {
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
        // }
    }
    }
}

export default ApiFecth;
