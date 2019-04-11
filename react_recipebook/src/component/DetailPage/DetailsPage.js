import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import {  WhisperSpinner } from "react-spinners-kit";
import Details from './Details'

import {connect } from 'react-redux'
import {getSingleRecipe} from '../../redux/actions/RecipesActions'

class DetailsPage extends Component {
    
    componentWillMount(){
        const id = this.props.match.params.id;
        this.props.getSingleRecipe(id)
    }

    
    render() { 
            const {recipeDetail, loading , error } = this.props
            
            
        return ( 
                <Container>
                    <Row>
                        {
                            loading ?
                             <WhisperSpinner loading={loading}size={500} /> 
                             :
                            <Details error={error} detail={recipeDetail} loading={loading} />
                        }
                        
                    </Row>
             </Container>
         );
    }
}

const MapStateToProps =(state) =>{
    
    return {
    recipeDetail:state.recipes.singlerecipe,
    loading:state.recipes.loadingsingle,
    error:state.recipes.errorsingle,
    }
} 

const MapDispatchToProps =(dispatch) =>{
    return {
        getSingleRecipe: (id)=>dispatch(getSingleRecipe(id))
    }
}


 
export default connect(MapStateToProps,MapDispatchToProps)(DetailsPage);