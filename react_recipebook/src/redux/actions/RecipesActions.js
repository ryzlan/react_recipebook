import {
    GET_RECIPES_PENDING,GET_RECIPES ,GET_RECIPES_FAIL,
    GET_LATEST_RECIPES_PENDING,GET_LATEST_RECIPES,GET_LATEST_RECIPES_FAIL,
    GET_SINGLE_RECIPES,GET_SINGLE_RECIPES_FAIL,GET_SINGLE_RECIPES_PENDING
} from '../reducers/recipesReducers'
import { actionTypes } from 'redux-firestore';




export const getRecipes = (query ="chicken breast") =>{
    return (dispatch,getState) =>{
        dispatch({
            type:GET_RECIPES_PENDING,
        });




        const getRecipesUrl=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
        fetch(getRecipesUrl)
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                dispatch({
                    type:GET_RECIPES,
                    payload:data.meals.splice(0,6)
                })
            }).catch((err)=>{
                dispatch({
                    type:GET_RECIPES_FAIL,
                    payload:err
                })
            })
    }
}

export const getLatRecipes = () =>{
    return (dispatch , getState ) => {

        dispatch({
            type:GET_LATEST_RECIPES_PENDING,
        });



        const getLatRecipesURL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
        fetch(getLatRecipesURL)
            .then((res) => {
                return res.json();
            })
            .then((data) =>{
                dispatch({
                    type:GET_LATEST_RECIPES,
                    payload:data.meals
                })
            }).catch((err)=>{
                dispatch({
                    type:GET_LATEST_RECIPES_FAIL,
                    payload:err
                })
            })
    }
}

export const getSingleRecipe = (id) =>{
    return (dispatch , getState )=>{
        dispatch({ type: GET_SINGLE_RECIPES_PENDING})
        
        const getSingleRecipeURL=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(getSingleRecipeURL)
            .then((res)=>{
                return res.json()
            })
            .then((data) =>{
                dispatch({
                    type:GET_SINGLE_RECIPES,
                    payload:data.meals[0]
                })
            })
            .catch((err)=>{
                dispatch({
                    type:GET_SINGLE_RECIPES_FAIL,
                    payload:err
                })
            })


    }
}


