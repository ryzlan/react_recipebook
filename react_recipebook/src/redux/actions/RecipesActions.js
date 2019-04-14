import {
    GET_RECIPES_PENDING,GET_RECIPES ,GET_RECIPES_FAIL,
    GET_LATEST_RECIPES_PENDING,GET_LATEST_RECIPES,GET_LATEST_RECIPES_FAIL,
    GET_SINGLE_RECIPES,GET_SINGLE_RECIPES_FAIL,GET_SINGLE_RECIPES_PENDING,
    ADD_FAVORITE_RECIPE,GET_FAVORITE_RECIPES
} from '../reducers/recipesReducers'


import {favRef} from '../../config/fire'


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

export const addFav = (recipeid , uid) => dispatch  =>{
    
    favRef.child(uid).push().set(recipeid).then(()=>{
        dispatch({
            type:ADD_FAVORITE_RECIPE,
            payload:recipeid
        });
    })
    // .then(()=>{
    //     favRef
    //     .child(uid)
    //     .once('value')
    //     .then((snapshot)=>{
    //         let obj = snapshot.val()
    //         let arr = []
    //         for (var key in obj) {
    //             if (obj.hasOwnProperty(key)) {
    //                 arr.push(obj[key])
    //             }
    //         }
    //         dispatch({
    //             type:GET_FAVORITE_RECIPES,
    //             payload:arr
    //         })
    //     })
        
    // })
    

}

export const getFav = (uid) => (dispatch) =>{
    favRef
        .child(uid)
        .once('value')
        .then((snapshot)=>{
            let obj = snapshot.val()
            let arr = []
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    arr.push(obj[key])
                }
            }
            dispatch({
                type:GET_FAVORITE_RECIPES,
                payload:arr
            })
        })
        
            
       
}

export const deleteFav=(uid ,id)=> dispatch =>{
    favRef
        .child(uid)
        .orderByChild('idMeal')
        .equalTo(id)
        .on('child_added' , snapshot =>{
            snapshot.ref.remove();
        })
}

export const addRecipe = (data) => dispatch =>{

}
export const deleteRecipe = (id) => dispatch =>{

}
