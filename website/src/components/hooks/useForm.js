import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import useUser from '../hooks/useUser';
import Axios from 'axios';



export const useForm = (initialForm, validateForm, setNoUsuario, image) => {
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

    let baseUrl = "https://instumentos-back.herokuapp.com/usuarios/login"


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

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", form.file)
        

        console.log("llegue 1");
        

        Axios
        .post('https://instrumentoss.herokuapp.com/usuarios/guardar', {form, formData} )
        .then(response => {
            console.log(response)
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log(error)
        })

        // console.log("llegue 2");

        
        
        // history.push("/")
        
        
    }

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSubmitRegister
    };

}