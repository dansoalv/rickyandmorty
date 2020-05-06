import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { updateCharacter} from "../Actions/Character.actions";
import { useHistory } from 'react-router-dom';

const EditCharacter = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [character, setCharacter] = useState({
        name: '',
        gender: '',
        type: '',
        status: '',
        species: ''
    })
    const characterEdit = useSelector(state => state.Characters.characterEdit)

    useEffect(() => {
        setCharacter(characterEdit)
    }, [characterEdit])
    const {name, gender, type, status, species} = character

    const handleSubmitCharacter = e => {
        e.preventDefault()
        history.push(`/`)
        dispatch(updateCharacter(character))
    }

    const onChangeForm = e => {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container box-table">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Editar Personaje
                            </h2>

                            <form onSubmit={handleSubmitCharacter}>
                                <div className="form-group">
                                    <label>Nombre Personaje</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Personaje"
                                        name="name"
                                        value={name}
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Especie</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Especie"
                                        name="species"
                                        value={species}
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Genero"
                                        name="gender"
                                        value={gender}
                                        onChange={onChangeForm}
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
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tipo"
                                        name="type"
                                        value={type}
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100" >Guardar Cambios</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCharacter;