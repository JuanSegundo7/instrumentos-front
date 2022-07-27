import React from 'react';
import Instrumento from "../Instrumentos/instrumento"

const NoInstrumentos = (props) => {
    let instrumentos = props.instrumentos
    if(instrumentos.length == 0){
        return <h2 className="h1-white">No hay instrumentos guardados todavia</h2> 
    }else{
        return <section>
        <article className="instrumentos-article">      
            {instrumentos.map((instrumentos, i) => {
                return <Instrumento
                key={instrumentos + i}
                id={instrumentos.id}
                imagenes={instrumentos.imagenes[0].url_imagen}
                nombre={instrumentos.nombre}
                fabricante={instrumentos.fabricante}
                precio={instrumentos.precio}
                precioDescuento={instrumentos.precioDescuento}
                />
            })}
            </article>
        </section>
    }   
}

export default NoInstrumentos;
