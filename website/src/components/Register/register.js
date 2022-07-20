import React, { Component }from 'react';
import "./register.css"
import Axios from "axios";
import {useHistory} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Register extends Component {

    
    state = {
        username: "",
        nombre: "",
        email: "",
        apellido: "",
        password: "",
        file: ""
    }
    
    changeHandler = e => {
        if (e.target.name === "file") {
            this.setState({ [e.target.name]: e.target.files[0] });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    
    submitHandler = e => {
        let history = useHistory()
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("username", this.state.username);
        formData.append("nombre", this.state.nombre);
        formData.append("apellido", this.state.apellido);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        formData.append("file", this.state.file);
        
        console.log(formData);
        

        Axios
        .post('https://instumentos-back.herokuapp.com/usuarios/guardar', formData)
        .then(response => {
            console.log(response)
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log(error)
        })
        
        
        history.push("/")
        
        
    }
    
    render(){
            
            const {nombre,email,username,apellido,password} = this.state
            
            return(
                <section className="forms-container margin-sections">
                <form onSubmit={this.submitHandler} method="POST" id="register" encType="multipart/form-data">
                        <fieldset>
                            <input type="text" placeholder="Username" name="username" value={username} className="input" onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset>
                            <input type="text" placeholder="Nombre" name="nombre" value={nombre} className="input" onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset>
                            <input type="text" placeholder="Apellido" name="apellido" value={apellido} className="input" onChange={this.changeHandler}  />
                        </fieldset>
                        <fieldset>
                            <input type="email" placeholder="Email" name="email" value={email} className="input" onChange={this.changeHandler}  />
                        </fieldset>
                        <fieldset>
                            <input type="password" placeholder="Contraseña" name="password" value={password} className="input" onChange={this.changeHandler} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="file" id="image">
                                <FontAwesomeIcon icon="cloud"/> Custom Upload
                            </label>
                            <input type="file" name="file" className="input" onChange={this.changeHandler} id="file"/>
                        </fieldset>
                        <fieldset>
                            <button className="button-login" type="submit">Enviar</button>
                        </fieldset>
                    </form>
            </section>
        )}
}

export default Register;