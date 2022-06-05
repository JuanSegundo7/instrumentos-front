import React, { Component }from 'react';
import "./register.css"
import Axios from "axios";

class Register extends Component {
    state = {
        nombre: "",
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
        // e.preventDefault();
        
        const formData = new FormData();
        formData.append("nombre", this.state.nombre);
        formData.append("apellido", this.state.apellido);
        formData.append("password", this.state.password);
        formData.append("file", this.state.file);

        console.log(this.state.password)
        console.log(formData);


        Axios
        .post('http://localhost:5000/usuarios/guardar', formData)
        .then(response => {
            console.log(response)
			})
        .then(data => console.log(data))
			.catch(error => {
                console.log(error)
			})

            console.log("file", this.state.file)

    }
        
        render(){
            
            const {nombre,apellido,password} = this.state
            
            return(
                <section className="forms-container margin-sections">
                <form onSubmit={this.submitHandler} method="POST" id="register" encType="multipart/form-data">
                        <fieldset>
                            <input type="text" placeholder="Nombre" name="nombre" value={nombre} className="input" onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset>
                            <input type="text" placeholder="Apellido" name="apellido" value={apellido} className="input" onChange={this.changeHandler}  />
                        </fieldset>
                        <fieldset>
                            <input type="password" placeholder="Contraseña" name="password" value={password} className="input" onChange={this.changeHandler} />
                        </fieldset>
                        <fieldset>
                            <input type="file" name="file" className="input" onChange={this.changeHandler} id="user-photo" />
                        </fieldset>
                    <fieldset>
                        <button className="button-login" type="submit">Enviar</button>
                    </fieldset>
                    </form>
            </section>
        )}
}

export default Register;