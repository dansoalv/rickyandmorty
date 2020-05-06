import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {getCharactersList, getCharacterEdit} from '../Actions/Character.actions'

const Characters = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const loadCharacters = () => dispatch(getCharactersList());
        loadCharacters()
    })

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

    return(
        <React.Fragment>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
            {characters.length === 0 ? 'Cargando' :
                <div className="container box-table">
                    <div className="row" style={{justifyContent: 'space-around'}}>
                        {characters.map(item => (
                            <div className="card" key={item.id}>
                                <img className="card-img-top" src={item.image} alt={item.name}/>
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