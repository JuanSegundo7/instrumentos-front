import React, {useEffect, useState} from 'react';

const AllUsers = () => {
    let [users, setUsers] = useState("")
    useEffect(async () => {
        try{
            await fetch(`https://instumentos-back.herokuapp.com/user/all`)
            .then(response => response.json())
            .then(data => setUsers(data))
        }catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    },[])
    return (
        <section id="margin-mobile">
            <article className="instrumentos-article">      
            {users.map((instrumentos, i) => {
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

export default AllUsers;
