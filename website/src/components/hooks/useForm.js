import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';



export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading,] = useState(false);
    const [response,] = useState(null);
    const history  = useHistory()

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

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form));
        // let windows = window.location.href = 'http://localhost:3000/'
        console.log(form)
        
        if (Object.keys(errors).length === 0) {
            console.log(form, "form")
            Axios
            .post(baseUrl, form)
            .then(response => {
                console.log(response)
            })
            .then(data => console.log(data))
                .catch(error => {console.log(error)})

            history.push("/")
        }

        
    
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    };

}