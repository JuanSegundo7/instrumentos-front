import React from 'react';
import errorImage from "../Home/img/error.webp"

const UsersArticle = (props) => {
    return (
        <section className="instruments_table">
            <article className="instruments_tbody" id="userArticle">
                <a href={`/user/${props.id}`}>
                    <article className="instrumento-inside">
                        <figure>
                            <img src={`https://instumentos-back.herokuapp.com${props.avatar}`} onError={e => { e.currentTarget.src = errorImage }} alt={props.nombre}/>
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
