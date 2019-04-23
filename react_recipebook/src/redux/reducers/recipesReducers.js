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
export const DELETE_FAVORITE_RECIPES = "DELETE_FAVORITE_RECIPES"

export const ADD_USER_RECIPE='ADD_USER_RECIPE'
export const GET_USER_RECIPE='GET_USER_RECIPE'
export const DELETE_USER_RECIPE='DELETE_USER_RECIPE'

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

    favoriterecipes:[],
    userRecipes:[]
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
        case ADD_FAVORITE_RECIPE:{
            const newState= Object.assign([], state.favoriterecipes);
            //check for duplicates
            //state.filter(cat => cat.id !== action.cat.id),
            return {
                ...state ,
                favoriterecipes:[...newState , Object.assign({}, action.payload) ]
            }  
        }
        case GET_FAVORITE_RECIPES:
            return {
                ...state,
                favoriterecipes:[...action.payload]
            }
        case DELETE_FAVORITE_RECIPES:{
            const newState= Object.assign([], state.favoriterecipes);
            const indexOfdata = state.favoriterecipes.findIndex(data =>{
                return data.id === action.payload
            })
            newState.splice(indexOfdata,1);

            return {
                ...state,
                favoriterecipes:newState
            }
        }    
        case ADD_USER_RECIPE:{
            const newState = Object.assign([], state.userRecipes)
            //check for duplicates
            //state.filter(cat => cat.id !== action.cat.id),
            return{
                ...state,
                userRecipes:[...newState , Object.assign({}, action.payload) ]
            }    
        }
        case GET_USER_RECIPE:{
            return{
                ...state,
                userRecipes:[...action.payload]
            }
        }
        case DELETE_USER_RECIPE:{
            const newState= Object.assign([], state.userRecipes);
            const indexOfdata = state.userRecipes.findIndex(data =>{
                return data.id === action.payload
            })
            newState.splice(indexOfdata,1);

            return {
                ...state,
                userRecipes:newState
            }
        }    
        default:
            return state;
    }
}