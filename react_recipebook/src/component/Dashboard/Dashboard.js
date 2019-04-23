import React, { Component,Fragment } from 'react';


import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import FavCards from './FavCards'
import AddedRecipes from './AddedRecipes';
import { connect } from 'react-redux'
import { getCreatedRecipes ,
    deleteRecipe , 
    getFav,
    deleteFav} from '../../redux/actions/RecipesActions'


class Dashboard extends Component {
    state = {
        favs:undefined,
        recipes:undefined,
        modalShow:false,
        msg:''

    }
    componentWillMount(){
        this.props.getCreatedRecipes(this.props.auth.uid);
        this.props.getFav(this.props.auth.uid)
    }



    
    
    handleDeleteRecipe =(id)=>{
        console.log(id);
        
        this.props.deleteRecipe(id,this.props.auth.uid)
        //this.props.history.push('/dashboard')
    }    

    handleDeleteFavs = id =>{
        this.props.deleteFav(id,this.props.auth.uid)
        //this.props.history.push('/dashboard')
    }



    render() { 
        console.log(this.props);
        
        return (
            <Fragment>
                <Container>
                    



                        <Row>
                            {this.props.favs.length > 0 ?
                                <FavCards
                                    deleteFav={this.handleDeleteFavs}
                                    recipe={this.props.favs} />
                                    : 
                                 <h1>You dont have any favorites yet...</h1>
                            }
                        </Row>


                    
                    <Row>
                        {this.props.userRecipes.length > 0 ?
                            <AddedRecipes
                                deleteRecipe={this.handleDeleteRecipe}
                                userRecipes={this.props.userRecipes}
                            /> : 
                            <h1>You didnt add any recipes yet ...</h1>
                        }

                    </Row>


                </Container>
            </Fragment>);
    }
}
 
const mapStateToProps = state=>{
    return{
        auth:state.authStatus.auth,
        userRecipes:state.recipes.userRecipes,
        favs:state.recipes.favoriterecipes
    }
}



export default connect(mapStateToProps,{getCreatedRecipes, deleteRecipe , getFav ,deleteFav })(Dashboard);