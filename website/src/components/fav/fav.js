import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Context from "../userContext/userContext"

import {useHistory} from 'react-router-dom';
import useUser from "../hooks/useUser"
import favService from "./favService"


export default function Fav({id}) {
    const {jwt} = useContext(Context)
    const history = useHistory()
    const {isLogged} = useUser()

    const handleClick = () => {
        !isLogged ? history.push("/") : favService(id, jwt)
    }

    return (
        <FontAwesomeIcon onClick={handleClick} icon="heart" className="button-login"/>
    );
}

