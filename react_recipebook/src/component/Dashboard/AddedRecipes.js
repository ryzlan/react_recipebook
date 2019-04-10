import React, { Component , Fragment } from 'react';

class AddedRecipes extends Component {
    state = {  }

    renderRecipes =()=>{
       return this.props.recipe.map((r)=>{
            return <div key={r.key} >{r.name}</div>
        })
    }



    render() { 
        return ( 
            <Fragment>

            {this.renderRecipes()}

            </Fragment>

         );
    }
}
 
export default AddedRecipes;