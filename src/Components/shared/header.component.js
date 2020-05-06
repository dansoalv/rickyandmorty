import React from 'react';
import { useHistory } from 'react-router-dom';

const HeaderComponent = () => {

    const history = useHistory();

    const redirectNew= () => {
        history.push(`/nuevo-personaje/`)
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Ricky & Morty</a>
            <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={() => redirectNew()}>Nuevo personaje</button>
        </nav>
    );
}

export default HeaderComponent