import React, { Component } from 'react';
import CategoriaT from './Categoria';

class Categoria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
        }
    };

    async componentDidMount() {
        try{
            let categorias = await fetch("https://instumentos-back.herokuapp.com/instrumentos").then(response => response.json())
            
            this.setState({
                categorias: categorias.categorias,
            });
            
            console.log("acaa",this.state.categorias);
            
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        return(
                <fieldset>
                    {this.state.categorias === [] && <p>Cargando...</p>}{
                        this.state.categorias.map((categorias, i) => {
                            return <CategoriaT
                                                key={categorias + i}
                                                categoria={categorias.nombre}
                                                />
                    })
                    }
                </fieldset>
        )
    }

}

export default Categoria;
