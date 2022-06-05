import {useState} from 'react';
import Axios from 'axios';


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading,] = useState(false);
    const [response,] = useState(null);

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
        setErrors(validateForm(form));
        let windows = window.location.href = 'http://localhost:3000/'
        
        if (Object.keys(errors).length === 0) {
            Axios
            .post('http://localhost:5000/usuarios/login',form, windows)
            .then(response => {
                console.log(response)
                })
            .then(data => console.log(data))
                .catch(error => {
                    console.log(error)
                })
            
        }

        e.preventDefault()
        
    
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