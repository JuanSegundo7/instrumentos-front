import React, {Component} from "react";
import "./user.css"
import Api from "../Instrumentos/apiInstrumentos"
import { withRouter } from "react-router";

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    };

    async componentDidMount(){
        try{
            console.log()
            const id = this.props.match.params.id;
            
            let user = await fetch(`http://localhost:5000/user/${id}`).then(response => response.json())
            
            this.setState({
                user: user               
            });

            console.log(this.state.user)

        }
        catch(error){
            console.log(error);
        }
    }
    render(){
        let user = this.state.user
        return (
            <section id="user-detail">
                <section id="user_saved">
                    <article>
                        <figure id="user_figure">
                            <img src={`http://localhost:5000${user.photo}`} />
                        </figure>
                        <h3 id="bienvenido_user">Bienvenido {user.nombre}</h3>
                        <form className="margin-sections">
                            <fieldset>
                                <input type="text" name="" placeholder={user.nombre} className="input-profile"></input>
                            </fieldset>
                            <fieldset>
                                <input type="text" name="apellido" placeholder={user.apellido} className="input-profile"></input>
                            </fieldset>
                            <fieldset>
                                <input type="password" name="password" placeholder={user.password} className="input-profile"></input>
                            </fieldset>
                            <fieldset>
                                <button className="button-login button-detail" type="submit">Enviar</button>
                            </fieldset>
                        </form>
                    </article>
                        <article>
                            <h3 id="Instrumentos_guardados">Instrumentos Guardados</h3>
                            <Api />
                        </article>
                </section>
            </section>
        );
        }
}


export default withRouter(User);

