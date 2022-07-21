import React, {useState} from 'react'
import { useForm } from '../hooks/useForm';
import "./register.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {

    const [image, setImage] = useState()

    const initialForm = {
        username: "",
        nombre: "",
        email: "",
        apellido: "",
        password: "",
        file: ""    
    }

    const {form, handleChange, handleSubmitRegister} = useForm(initialForm, image)

    const imageHandler = (e) => {

        if (e.target.name === "file") {
            // ({ [e.target.name]: e.target.files[0] });
            form.file = (e.target.files[0]);
        } else {
            initialForm.file = ({ [e.target.name]: e.target.value });
        }

        console.log(initialForm, "dentro de handle");
    }

    // action="https://instumentos-back.herokuapp.com/user/login"

    return(
        <section className="forms-container margin-sections">
        <form onSubmit={handleSubmitRegister} method="POST" id="register" encType="multipart/form-data">
                <fieldset>
                    <input type="text" placeholder="Username" name="username" value={form.username} className="input" onChange={handleChange}/>
                </fieldset>
                <fieldset>
                    <input type="text" placeholder="Nombre" name="nombre" value={form.nombre} className="input" onChange={handleChange}/>
                </fieldset>
                <fieldset>
                    <input type="text" placeholder="Apellido" name="apellido" value={form.apellido} className="input" onChange={handleChange}  />
                </fieldset>
                <fieldset>
                    <input type="email" placeholder="Email" name="email" value={form.email} className="input" onChange={handleChange}  />
                </fieldset>
                <fieldset>
                    <input type="password" placeholder="Contraseña" name="password" value={form.password} className="input" onChange={handleChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="file" id="image">
                        <FontAwesomeIcon icon="cloud"/> Custom Upload
                    </label>
                    <input type="file" name="file" className="input"  onChange={imageHandler} id="file"/>
                </fieldset>
                <fieldset>
                    <button className="button-login" type="submit">Enviar</button>
                </fieldset>
            </form>
        </section>
    )
}

export default Login;