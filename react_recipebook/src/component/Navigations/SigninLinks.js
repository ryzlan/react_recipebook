import React, { Component,Fragment } from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link } from 'react-router-dom'


const SigninLinks=()=>{
    return(
        <Fragment>
            <Nav><Link className="nav-link" to="/dashboard" >Dashboard</Link></Nav>
            <Nav><Link className="nav-link" to="/create" >Create New recipes</Link></Nav>
            <Nav.Link className="nav-link" to="/">logout</Nav.Link>
            <Nav.Link className="nav-link" to="/">Person@email.com</Nav.Link>
        </Fragment>
    );
}

export default SigninLinks;