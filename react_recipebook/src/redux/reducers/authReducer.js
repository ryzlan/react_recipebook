import {FETCH_USER } from '../actions/authActions'

const initialState = false;


export const authReducer =  (state=initialState , action )  =>{
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null ;
        
        default:
            return state;
    }
}