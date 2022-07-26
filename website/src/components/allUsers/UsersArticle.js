import React from 'react';
import errorImage from "../Home/img/error.webp"

const UsersArticle = (props) => {
    console.log(props.imagenes);
    return (
        <section className="instruments_table">
            <article className="instruments_tbody">
                <a href={`/user/${props.id}`}>
                    <article className="instrumento-inside">
                        <figure>
                            <img src={props.avatar === undefined ? errorImage : `https://instumentos-back.herokuapp.com${props.avatar}`} alt={props.nombre}/>
                        </figure>
                        <p>{props.username}</p>
                        <p>{props.email}</p>
                    </article>
                </a>
            </article>
        </section>
    );
}

export default UsersArticle;
