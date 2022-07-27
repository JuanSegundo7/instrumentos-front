import React, {useEffect, useState} from 'react';
import UsersArticle from "./UsersArticle"

const AllUsers = () => {
    let [users, setUsers] = useState(undefined)

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

    if(users === undefined){
        return <p>Cargando...</p>
    }else{
    return (
        <section id="margin-mobile">
            <article className="instrumentos-article">      
            {users.map((user, i) => {
                return <UsersArticle
                key={user + i}
                id={user.id}
                avatar={user.avatar}
                username={user.username}
                email={user.email}
                />
            })}
            </article>
        </section>
        
    );
}}

export default AllUsers;
