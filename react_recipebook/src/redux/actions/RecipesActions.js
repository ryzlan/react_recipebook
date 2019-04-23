import {
    GET_RECIPES_PENDING,GET_RECIPES ,GET_RECIPES_FAIL,
    GET_LATEST_RECIPES_PENDING,GET_LATEST_RECIPES,GET_LATEST_RECIPES_FAIL,
    GET_SINGLE_RECIPES,GET_SINGLE_RECIPES_FAIL,GET_SINGLE_RECIPES_PENDING,
    ADD_FAVORITE_RECIPE,GET_FAVORITE_RECIPES,DELETE_FAVORITE_RECIPES,
    ADD_USER_RECIPE,GET_USER_RECIPE,DELETE_USER_RECIPE
} from '../reducers/recipesReducers'


import {favRef ,userRecipes} from '../../config/fire'


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

export const addFav = (recipe , uid) => dispatch  =>{
    console.log('called');
    
    favRef.child(uid).push().set(recipe).then(()=>{
        dispatch({
            type:ADD_FAVORITE_RECIPE,
            payload:recipe
        });
    })
    

}


export const getFav = (uid) => (dispatch) =>{
    
    favRef
        .child(uid)
        .once('value')
        .then((snapshot)=>{
            let obj = snapshot.val()
            const arr=[];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let o = {id:key , ...obj[key]}
                    arr.push(o)
                }
            }
            dispatch({
                type:GET_FAVORITE_RECIPES,
                payload:arr
            })
        }) 
        
            
       
}


export const deleteFav=(id,uid)=> dispatch =>{
    favRef
        .child(uid)
        .child(id)
        .remove()
        .then(()=>{
            dispatch({
                type:DELETE_FAVORITE_RECIPES,
                payload:id
            })
        })
        
}

export const addRecipe = (data,uid) => dispatch =>{

    userRecipes.child(uid).push().set(data).then(()=>{
        dispatch({
            type:ADD_USER_RECIPE,
            payload:data
        });
    })
}

export const getCreatedRecipes =(uid)=> dispatch =>{
    userRecipes
    .child(uid)
    .once('value')
    .then((snapshot)=>{
        let obj = snapshot.val()
        let arr = []
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let o = {id:key , ...obj[key]}
                arr.push(o)
            }
        }
        //console.log(arr);
        dispatch({
            type:GET_USER_RECIPE,
            payload:arr
        })
    })
}
export const deleteRecipe = (id , uid) => dispatch =>{
    userRecipes
        .child(uid)
        .child(id)
        .remove()
        .then(()=>{
            dispatch({
                type:DELETE_USER_RECIPE
            })
        })
        
        
}
