import React, {useState, useEffect} from "react";
import "./user.css"
import { withRouter } from "react-router-dom";
import errorImage from "../Home/img/error.webp"

const User = (props) => {
     const [user, setUser] = useState()
    const id = props.match.params.id;

    useEffect( async () => {
        try{
            await fetch(`https://instumentos-back.herokuapp.com/user/${id}`)
                .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
                .then(data => setUser(data))
            
        }
        catch(error){
            console.log(error);
        }
    });


    if(user === undefined){
        return <p>Cargando...</p>
    }else{
        console.log(user)
        return (
            <section id="user-detail">
                <section id="user_saved">
                        <figure id="user_figure">
                            <img src={`https://instumentos-back.herokuapp.com${user.avatar}`} onError={e => { e.currentTarget.src = errorImage }}/>
                        </figure>
                        <h3 id="bienvenido_user">Este es el perfil de {user.nombre}</h3>
                </section>
            </section>
        );
    }
}
    

    export default withRouter(User);