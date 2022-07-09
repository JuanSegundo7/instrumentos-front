import { useForm } from '../hooks/useForm';
import "./login.css"

const initialForm = {
    username: '',
    password: ''    
}

const validationsForm = (form) => {
    let errors = {};
    // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    // if(!form.email.trim()){
    //     errors.email = "El email es requerido"
    // }
    // else if (!regexEmail.test(form.email.trim())) {
    //     errors.email = "El email es incorrecto"
    // }

    if(!form.password.trim()){
        errors.password = "La contraseña es requerida"
    }

    return errors;
}

function Login(){

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm)

    // action="http://localhost:5000/user/login"

    return(
        <section className="forms-container margin-sections">
            <form onSubmit={handleSubmit} method="post" className="forms">
                <p>Ingresá</p>
                <fieldset>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} onBlur={handleBlur} className="input"/>
                    {errors.email && <p className="validations">{errors.email}</p>}
                </fieldset>
                <fieldset>
                        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} value={form.password} onBlur={handleBlur} className="input"/>
                        {errors.password && <p className="validations">{errors.password}</p>}
                </fieldset>
                    <input className="button-login" type="submit" value="Ingresar"/>
                <fieldset className="flex_pass">
                        <label htmlFor="remember"></label>
                        <input name="remember" id="remember" type="checkbox" className="input"/>
                        <p>Recordarme</p>
                </fieldset>
                <fieldset className="flex_pass2">
                    <a href=""><p className="olvide">Olvidé mi contraseña</p></a>
                    <a href="/register"><p className="olvide">Crear mi cuenta</p></a>
                </fieldset>
            </form>
        </section>
    )
}

export default Login;