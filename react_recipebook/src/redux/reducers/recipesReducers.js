export const GET_RECIPES_PENDING = "GET_RECIPES_PENDING";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_FAIL = "GET_RECIPE_FAIL";

export const GET_LATEST_RECIPES_PENDING = "GET_LATEST_RECIPES_PENDING";
export const GET_LATEST_RECIPES = "GET_LATEST_RECIPES";
export const GET_LATEST_RECIPES_FAIL = "GET_LATEST_RECIPES_FAIL";

export const GET_SINGLE_RECIPES_PENDING = "GET_SINGLE_RECIPES_PENDING";
export const GET_SINGLE_RECIPES = "GET_SINGLE_RECIPES";
export const GET_SINGLE_RECIPES_FAIL = "GET_SINGLE_RECIPES_FAIL";

export const ADD_FAVORITE_RECIPE = "ADD_FAVORITE_RECIPE"
export const GET_FAVORITE_RECIPES = "GET_FAVORITE_RECIPES"

const initialState = {
    Ingrecipes:[],
    errorIng:'',
    loadingIng:false,

    latestrecipes:[],
    loadingLat:false,
    errorLat:'',

    singlerecipe:{},
    loadingsingle:false,
    errorsingle:'',

    favoriterecipes:[]

};

export const recipeReducer =(state= initialState , action) =>{
    switch (action.type) {
        case GET_RECIPES:
            return{
                ...state,
                Ingrecipes:action.payload,
                loadingIng:false
            }
        case GET_RECIPES_FAIL:
            return{
                ...state,
                errorIng:action.payload,
                loadingIng:false
            }
        case GET_RECIPES_PENDING:
            return{
                ...state,
                loadingIng:true
            }    
        case GET_LATEST_RECIPES:
            return{
                ...state,
                latestrecipes:action.payload,
                loadingLat:false
            }
        case GET_LATEST_RECIPES_FAIL:
            return {
                ...state,
                errorLat:action.payload,
                loadingLat:false
            }
        case GET_LATEST_RECIPES_PENDING:
            return{
                ...state,
                loadingLat:true
            }  
        case GET_SINGLE_RECIPES:
            return{
                ...state,
                singlerecipe:action.payload,
                loadingsingle:false
            }
        case GET_SINGLE_RECIPES_FAIL:
            return {
                ...state,
                errorsingle:action.payload,
                loadingsingle:false
            }
        case GET_SINGLE_RECIPES_PENDING:
            return{
                ...state,
                loadingsingle:true
            }    
        case ADD_FAVORITE_RECIPE:
            return state   
        case GET_FAVORITE_RECIPES:
            return {
                ...state,
                favoriterecipes:[action.payload, ...state.favoriterecipes]
            }
            

        default:
            return state;
    }
}