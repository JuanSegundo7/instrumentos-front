import React,{Component} from 'react';
import Axios from 'axios';
import "./formObject.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';



class Form extends Component {
    
    state = {
        nombre: "",
        fabricante: "",
        precio: "",
        categoria: "",
        descuento: "",
        precioDescuento: "0",
        texto: "",
        fecha: "",
        modelo: "",
        color: "",
        images: "",
    }

    changeHandler = e => {
        if (e.target.name === "images") {
            this.setState({ [e.target.name]: e.target.files });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    
    submitHandler = e => {
        e.preventDefault();
        const history = useHistory()
        
        const formData = new FormData();
        formData.append("nombre", this.state.nombre);
        formData.append("fabricante", this.state.fabricante);
        formData.append("precio", this.state.precio);
        formData.append("categoria", this.state.categoria);
        formData.append("descuento", this.state.descuento);
        formData.append("precioDescuento", this.state.precioDescuento);
        formData.append("texto", this.state.texto);
        formData.append("fecha", this.state.fecha);
        formData.append("modelo", this.state.modelo);
        formData.append("color", this.state.color);


        console.log(formData);
        
        const files = Array.from(this.state.images)
        formData.append("images", files);
        
        files.forEach((img) => {
            formData.append("images", img);
        });

        Axios
        .post('https://instumentos-back.herokuapp.com/guardar', formData)
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
            
            const {nombre,fabricante,precio,precioDescuento,texto,fecha,color,modelo} = this.state
            
            return(
                <main>

        <section className="forms-container margin-sections">
            <section>
                <form onSubmit={this.submitHandler} method="POST" encType="multipart/form-data" id="form-instrumentos">
                    <article className="form-articles">
                        <fieldset>
                            <input placeholder="Nombre" type="text" name="nombre" value={nombre} onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Fabricante" type="text" name="fabricante" value={fabricante} onChange={this.changeHandler} />
                        </fieldset>
                        <fieldset>
                            <input type="number" name="precio"  placeholder="Precio"  value={precio} onChange={this.changeHandler}/>
                        </fieldset>
                    </article>
                    <article className="form-articles">
                        <fieldset>
                            <h3>¿Tiene descuento?</h3>
                            <fieldset id="flexRadio">
                                    <input type="radio" className="solicitar-radio" name="descuento" value={1} onChange={this.changeHandler}></input>
                                    <p>Si</p>
                                    <input type="radio"  className="solicitar-radio" name="descuento" value={0} onChange={this.changeHandler}></input>
                                    <p>No</p>
                            </fieldset>
                        </fieldset>
                        <fieldset>
                            <h3>Precio con descuento:</h3>
                            <label htmlFor="precioDescuento"></label>
                            <input type="number" name="precioDescuento"  placeholder="Precio"  value={precioDescuento} onChange={this.changeHandler}/>
                        </fieldset>
                    </article>
                    <span className="divisor"></span>
                    <article className="form-articles">
                        <fieldset>
                            <input type="text" name="modelo"  placeholder="Modelo"  value={modelo} onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset>
                            <input type="text" name="color"  placeholder="Color"  value={color} onChange={this.changeHandler}/>
                        </fieldset>
                    </article>
                    <article className="form-articles">
                        <fieldset>
                            <article>
                                <h3>Seleccione el tipo de instrumento</h3>
                            </article>
                            <article>
                                <fieldset className="flex-row">
                                    <fieldset className="flexRadio">
                                        <input type="radio" className="solicitar-radio" name="categoria" value={1} onChange={this.changeHandler}></input>
                                        <p>Guitarra</p>
                                    </fieldset>
                                    <fieldset className="flexRadio">
                                        <input type="radio" className="solicitar-radio" name="categoria" value={2} onChange={this.changeHandler}></input>
                                        <p>Bajo</p>
                                    </fieldset>
                                    <fieldset className="flexRadio">
                                        <input type="radio" className="solicitar-radio" name="categoria" value={3} onChange={this.changeHandler}></input>
                                        <p>Teclados</p>
                                    </fieldset>
                                    <fieldset className="flexRadio">
                                        <input type="radio" className="solicitar-radio" name="categoria" value={4} onChange={this.changeHandler}></input>
                                        <p>Bateria</p>
                                    </fieldset>
                                    <fieldset className="flexRadio">
                                        <input type="radio" className="solicitar-radio" name="categoria" value={5} onChange={this.changeHandler}></input>
                                        <p>Microfono</p>
                                    </fieldset>
                                </fieldset>
                            </article>
                        </fieldset>
                        </article>
                            <span className="divisor"></span>
                    <fieldset>
                        <h3>Información del Instrumento</h3>
                        <textarea placeholder="Información.." name="texto"  value={texto} onChange={this.changeHandler}></textarea>
                    </fieldset>
                    <span className="divisor"></span>
                    <article className="form-articles">
                        <fieldset className="fecha-form-instrumentos">
                            <h3>Establece la fecha de creación de tu instrumento</h3>
                            <input type="date"  name="fecha"  value={fecha} onChange={this.changeHandler}/>
                        </fieldset>
                        <fieldset className="fecha-form-instrumentos">
                            <h3>Subi una o varias imagenes</h3>
                            <label htmlFor="file" id="image">
                                <FontAwesomeIcon icon="cloud"/> Custom Upload
                            </label>
                            <input type="file" name="images" className="input" onChange={this.changeHandler} id="fotosProyecto" multiple/>
                        </fieldset>
                    </article>
                        <fieldset className="flex-botones">
                            <button className="button-login" type="submit"> Enviar</button>
                            <button className="button-login" type="reset"> Reiniciar</button>
                        </fieldset>
                </form>
            </section>
    </section>
    </main>
    )}
}

export default Form;