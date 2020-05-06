import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import imgGeneric from '../Assets/image-placeholder.jpg'

import {getCharactersList, getCharacterEdit, deleteCharacter} from '../Actions/Character.actions'
import Swal from "sweetalert2";

const Characters = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const loadCharacters = () => dispatch(getCharactersList());
        loadCharacters()
    }, [])

    const characters = useSelector(state => state.Characters.characters)
    const error = useSelector(state => state.Characters.error)

    const redirectEdit = character => {
        dispatch( getCharacterEdit(character) );
        history.push(`/editar-personaje/${character.id}`)
    }

    const redirectDetails = character => {
        dispatch( getCharacterEdit(character) );
        history.push(`/detalles/${character.id}`)
    }

    const deleteCharacterBtn = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un personaje que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch( deleteCharacter(id) );
            }
        });
    }

    return(
        <React.Fragment>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
            {characters.length === 0 ? 'Cargando' :
                <div className="container box-table">
                    <div className="row" style={{justifyContent: 'space-around'}}>
                        {characters.map(item => (
                            <div className="card" key={item.id}>
                                <img className="card-img-top img-size" src={item.image !== undefined ? item.image : imgGeneric} alt={item.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <table className="table-striped">
                                        <thead/>
                                        <tbody>
                                        <tr>
                                            <td><strong>Estatus </strong></td>
                                            <td>{item.status}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Especie </strong></td>
                                            <td>{item.species}</td>
                                        </tr>

                                        <tr>
                                            <td><strong>Genero </strong></td>
                                            <td>{item.gender}</td>
                                        </tr>

                                        <tr>
                                            <td><strong>Tipo</strong></td>
                                            <td>{item.type}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <br/>
                                    <div>
                                        <button type="button" className="btn btn-primary btn-position" onClick={() => redirectDetails(item)}>Más información</button>
                                        <button type="button" className="btn btn-secondary btn-position" onClick={() => redirectEdit(item)}>Editar</button>
                                    </div>
                                    <div className="row">
                                        <div className="col text-center">
                                            <span className="btn-link" onClick={() => deleteCharacterBtn(item.id)}>Borrar personaje</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Characters