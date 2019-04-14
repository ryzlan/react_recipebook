import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SigninLinks from './SigninLinks'
import SignoutLinks from './SignoutLinks'



import {connect} from 'react-redux'
import {signout} from '../../redux/actions/authActions'
import {getFav} from '../../redux/actions/RecipesActions'


class Navigation extends Component {



    render() { 
        const {auth ,favs } = this.props;
        
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">React-RecipeBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          { auth ?
            <Nav className="mr-auto">
              <SigninLinks email={auth.email} favs={favs} signout={this.props.signout}/>
            </Nav> :
            <Nav>
              <SignoutLinks  />
            </Nav>

          }
            
            
          </Navbar.Collapse>
        </Navbar>
          );
    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signout:()=>dispatch(signout()),
  }
} 

const mapStateToProps = state =>{
  return {
    auth:state.authStatus.auth,
    favs:state.recipes.favoriterecipes
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(Navigation);