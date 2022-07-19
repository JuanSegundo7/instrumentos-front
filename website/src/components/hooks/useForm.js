import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import useUser from '../hooks/useUser';
import Axios from 'axios';



export const useForm = (initialForm, validateForm, setNoUsuario) => {
    const [form, setForm] = useState(initialForm);
    const {login, isLogged} = useUser()
    const [errors, setErrors] = useState({});
    // const [loading,] = useState(false);
    // const [response,] = useState(null);
    const history  = useHistory()

    useEffect(() => {
        if (isLogged) {
            history.push("/")
        }
    }, [isLogged])

    let baseUrl = "http://localhost:5000/usuarios/login"


    const handleChange = (e) => {
        const { name,value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = async (e) => {
        try{

            e.preventDefault()
            setErrors(validateForm(form));
            // console.log(form)
            
            if (Object.keys(errors).length === 0) { 
                let { data } = await Axios.post(baseUrl, form)

                login(data)

            }
                
        }catch(e){
            setNoUsuario("El usuario ingresado no se encuentra")
        }
                
    
    };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    };

}