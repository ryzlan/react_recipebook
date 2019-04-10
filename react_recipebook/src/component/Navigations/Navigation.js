import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SigninLinks from './SigninLinks'
import SignoutLinks from './SignoutLinks'
  
class Navigation extends Component {
   

    render() { 
        
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">React-RecipeBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <SigninLinks />
            </Nav>
            <Nav>
              <SignoutLinks />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          );
    }
}

 
export default Navigation;