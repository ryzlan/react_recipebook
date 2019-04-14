import {combineReducers} from 'redux'
import {recipeReducer} from './recipesReducers'
import {authReducer} from './authReducer'

export const rootReducer = combineReducers({
    authStatus:authReducer,
    recipes: recipeReducer,
});

export const initialState ={}