import {
    ADD_CHARACTER,
    ADD_CHARACTER_FAIL,
    ADD_CHARACTER_SUCCESS,
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTER, UPDATE_CHARACTER_SUCCESS,
    GET_CHARACTER_DELETE,
    CHARACTER_DELETE_SUCCESS,
    CHARACTER_DELETE_FAIL
} from '../Types/types'


const initialState = {
    characters : [],
    error: null,
    loading: false,
    characterEdit: null,
    characterDelete: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS:
        case ADD_CHARACTER:
            return  { ...state, loading: action.payload }
        case ADD_CHARACTER_SUCCESS:
            return {...state, loading: false, characters: [...state.characters, action.payload]}
        case CHARACTER_DELETE_FAIL:
        case ADD_CHARACTER_FAIL:
            return {...state, loading: false, error: action.payload}
        case GET_CHARACTERS_SUCCESS:
            return  {...state, loading: false, error: false, characters: state.characters.length === 0 ?  action.payload : [...state.characters]}
        case GET_CHARACTER:
            return { ...state, characterEdit: action.payload}
        case UPDATE_CHARACTER_SUCCESS:
            return {...state, characterEdit: null, characters: state.characters.map(
                character =>
                    character.id === action.payload.id ? character = action.payload : character
                )}
        case GET_CHARACTER_DELETE:
            return {...state, characterDelete: action.payload}
        case CHARACTER_DELETE_SUCCESS:
            return {...state, characters: state.characters.filter(item => item.id !== state.characterDelete), characterDelete: null}
        default:
            return state
    }

}