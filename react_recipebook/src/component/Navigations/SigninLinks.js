import React, {Fragment } from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

const SigninLinks=(props)=>{
    return(
        <Fragment>
            <Nav><Link className="nav-link" to="/dashboard" >
            Dashboard
            <Badge pill variant="warning">{props.favs.length} </Badge>  </Link></Nav>
            <Nav><Link className="nav-link" to="/create" >Create New recipes</Link></Nav>
            <Nav className="nav-link" onClick={props.signout}>logout</Nav>
            <Nav.Link className="nav-link" to="/">{props.email}</Nav.Link>
        </Fragment>
    );
}

export default SigninLinks;