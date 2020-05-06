import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createNewCharacter} from '../Actions/Character.actions'
import { useHistory } from 'react-router-dom';

const NewCharacter = () => {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')
    const [type, setType] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();
    const loading = useSelector(state => state.Characters.loading)
    const error = useSelector(state => state.Characters.error);

    const addCharacter = Character => dispatch(createNewCharacter(Character))
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()=== '' || species.trim() === '' || gender.trim() === ''){
            return 0;
        }
        addCharacter({
            name,
            species,
            gender,
            status,
            type
        })

        history.push('/')
    }

    return (
        <div className="container box-table">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Agregar Nuevo Personaje
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre Personaje</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Personaje"
                                        name="nombre"
                                        value={name}
                                        onChange={ e => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Especie</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Especie"
                                        name="especie"
                                        value={species}
                                        onChange={ e => setSpecies(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Genero"
                                        name="genero"
                                        value={gender}
                                        onChange={ e => setGender(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Estatus"
                                        name="status"
                                        value={status}
                                        onChange={ e => setStatus(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tipo"
                                        name="Type"
                                        value={type}
                                        onChange={ e => setType(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100" >Agregar</button>
                            </form>
                            {loading ? <p>Cargando...</p> : null}
                            { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCharacter;