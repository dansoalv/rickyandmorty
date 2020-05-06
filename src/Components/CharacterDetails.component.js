import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getCharacterEdit} from "../Actions/Character.actions";

const CharacterDetailsComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const character = useSelector(state => state.Characters.characterEdit)

    const redirectEdit = character => {
        dispatch( getCharacterEdit(character) );
        history.push(`/editar-personaje/${character.id}`)
    }

    return (
        <React.Fragment>
            {character !== undefined && character !== null &&
            <div className="container box-table">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: 'auto'}}>
                            <div className="card-header">
                                {character.name}
                            </div>
                            <div className="card-body">
                                <div className="row info-box">
                                    <div className="col-4">
                                        <img src={character.image} alt={character.name}/>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>ID: </strong> {character.id}</p>
                                        <p><strong>Estatus: </strong> {character.status}</p>
                                        <p><strong>Especies: </strong> {character.species}</p>
                                        <p><strong>Genero: </strong> {character.gender}</p>
                                        <button className="btn btn-primary" onClick={() => redirectEdit(character)}>Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default CharacterDetailsComponent

