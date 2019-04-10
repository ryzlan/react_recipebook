import React, { Component,Fragment } from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link } from 'react-router-dom'


const SignoutLinks=()=>{
    return(
        <Fragment>
            <Nav><Link className="nav-link" to="/login" >Login</Link></Nav>
            <Nav><Link className="nav-link" to="/register" >Register</Link></Nav>
        </Fragment>
    );
}

export default SignoutLinks;