import {combineReducers} from 'redux'
import CharactersReducer from './character.reducer'


export default combineReducers({
    Characters: CharactersReducer
})
