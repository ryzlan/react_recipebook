import {authRef ,databaseRef ,firestore } from '../../config/fire';


export const FETCH_USER ="FETCH_USER"
export const LOGIN_SUCESS ="LOGIN_SUCESS"
export const LOGIN_FAIL ="LOGIN_FAIL"
export const SIGNOUT_SUCESS ="SIGNOUT_SUCESS"
export const REGISTER_SUCESS ="REGISTER_SUCESS"
export const REGISTER_FAIL ="REGISTER_FAIL"
export const REGISTER_LOADING ="REGISTER_LOADING"

export const fetchUser  = ()=> dispatch =>{
    authRef.onAuthStateChanged(user =>{
        if(user){
            dispatch({
                type:FETCH_USER,
                payload: user 
            })
        }else{
            dispatch({
                type:FETCH_USER,
                payload:null
            })
        }
    })
} 

export const signIn =(creds)=> dispatch =>{
    authRef.signInWithEmailAndPassword(
        creds.email,
        creds.password
        ).then(()=>{
            dispatch({
                type:LOGIN_SUCESS
            })
        })
        .catch((err) =>{
            dispatch({
                type:LOGIN_FAIL,
                payload:err.message
            })
        })
}

export const signout = ()=>dispatch =>{
    authRef.signOut()
        .then(()=>{
            dispatch({
                type:SIGNOUT_SUCESS
            })
        })
        .catch((err)=>{
            console.log("SignOut Failed");
            
        })
}




export const register = (creds) => dispatch =>{
    dispatch({
        type:REGISTER_LOADING
    })
    


    authRef.createUserWithEmailAndPassword(
        creds.email, 
        creds.password 
    ).then((res) =>{
        console.log(res);
        if(res){
            res.updateProfile({
                diplayName:creds.firstName + creds.lastName,
            })
            return ;
        }

    })
    .then(()=>{
        dispatch({
            type:REGISTER_SUCESS
        })
    })
    .catch((err) =>{
        dispatch({
            type:REGISTER_FAIL,
            payload:err.message
        })
    })
}