export const GET_RECIPES_PENDING = "GET_RECIPES_PENDING";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_FAIL = "GET_RECIPE_FAIL";
export const GET_LATEST_RECIPES_PENDING = "GET_LATEST_RECIPES_PENDING";
export const GET_LATEST_RECIPES = "GET_LATEST_RECIPES";
export const GET_LATEST_RECIPES_FAIL = "GET_LATEST_RECIPES_FAIL";


const initialState = {
    Ingrecipes:[],
    errorIng:'',
    loadingIng:false,
    latestrecipes:[],
    loadingLat:false,
    errorLat:''
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
        default:
            return state;
    }
}