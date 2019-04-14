import {
    FETCH_USER,
    REGISTER_SUCESS,
    REGISTER_FAIL,
    SIGNOUT_SUCESS,
    REGISTER_LOADING,
    LOGIN_SUCESS,
    LOGIN_FAIL
} from '../actions/authActions'

const initialState = {
    auth:false,
    authError:null,
    loading:false
}


export const authReducer =  (state=initialState , action )  =>{
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state, auth : action.payload || null 
            }
        case REGISTER_LOADING:
            return{
                ...state , loading:true
            }    


        case REGISTER_SUCESS:
            return {
                ...state,
                authError:null,
                loading:false
            }
        case REGISTER_FAIL:{
            return {...state , authError:action.payload ,
                loading:false }
        }  

        case LOGIN_SUCESS: 
            return{
                ...state ,
                authError: null
            }
        case LOGIN_FAIL:
            return{
                ...state,
                authError:action.payload
            }    

        case SIGNOUT_SUCESS:
            return state;

        default:
            return state;
    }
}