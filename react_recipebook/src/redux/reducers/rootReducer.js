import {combineReducers} from 'redux'
import { firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer} from 'redux-firestore'
import {recipeReducer} from './recipesReducers'

export const rootReducer = combineReducers({
    recipes: recipeReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
});

export const initialState ={}