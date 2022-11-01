import React, {useState} from 'react';
import Instrumento from "../functions/apiFecth"

const SearchBar = () => {   
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    return (
        <React.Fragment>
        <article id="search">
            <form>
                <label>
                <input type="text" value={value} onChange={handleChange} />
                </label>
            </form>
                <h2>Busca el nombre de tu instrumento favorito</h2>
        </article>
        <section id="visual">
            <article className="mobile-visible">
                <h1 className="home-title">COLOMBUS MUSIC</h1>
            </article>
            <article>
            </article>
            <Instrumento marca={value}/>
        </section>
        </React.Fragment>

    )

}

export default SearchBar;

