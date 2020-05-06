import {
    ADD_CHARACTER,
    ADD_CHARACTER_FAIL,
    ADD_CHARACTER_SUCCESS,
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL,
    GET_CHARACTER,
    UPDATE_CHARACTER_INIT,
    UPDATE_CHARACTER_FAIL,
    UPDATE_CHARACTER_SUCCESS
} from './../Types/types'
import clientAxios from "../Config/axios";
import Swal from 'sweetalert2'


// Created new character

export function createNewCharacter(Character) {
    return (dispatch) => {
        dispatch(addCharacter())
        try{
            dispatch(addCharacterSuccess(Character))
            Swal.fire(
                'Correcto',
                'El personaje se agrego correctamente',
                'success'
            )
        }catch (e) {
            dispatch(addCharacterFail(true))
            Swal.fire({
                    icon:"error",
                    title: "Hubo un error",
                    text: "Hubo un error, intenta de nuevo"
                }
            )
        }
    }
}

const addCharacter = () => ({
    type: ADD_CHARACTER,
    payload: true
})

const addCharacterSuccess = character => ({
    type: ADD_CHARACTER_SUCCESS,
    payload: character
})

const addCharacterFail = (state) => ({
    type: ADD_CHARACTER_FAIL,
    payload: state
})



export function getCharactersList() {
    return async (dispatch) => {
        dispatch(getCharacters())
        try {
            const response = await clientAxios.get('/character/')
            dispatch(getCharactersSuccess(response))
        }catch (e) {
            console.log(e)
            dispatch(getCharactersFail())
        }
    }
}

const getCharacters = () => ({
    type: GET_CHARACTERS,
    payload: true
})

const getCharactersSuccess = (characters) => ({
    type: GET_CHARACTERS_SUCCESS,
    payload: characters.data.results
})

const getCharactersFail = () => ({
        type:GET_CHARACTERS_FAIL,
        payload: true
})


export function getCharacterEdit(character) {
    return (dispatch) => {
        dispatch(getCharacterAction(character))
    }
}

const getCharacterAction = character => ({
    type: GET_CHARACTER,
    payload: character
})

export function updateCharacter(character) {
    return (dispatch) => {
        dispatch(updateCharacterAction())
        try{
            dispatch(updateCharacterSuccess(character))
            Swal.fire(
                'Correcto',
                'El personaje se modifico correctamente',
                'success'
            )
        }catch (e) {
            dispatch(updateCharacterFail(true))
        }
    }
}

const updateCharacterAction = () => ({
    type: UPDATE_CHARACTER_INIT,
})

const updateCharacterSuccess = character => ({
    type: UPDATE_CHARACTER_SUCCESS,
    payload: character
})

const updateCharacterFail = state => ({
    type: UPDATE_CHARACTER_FAIL,
    payload: state
})
