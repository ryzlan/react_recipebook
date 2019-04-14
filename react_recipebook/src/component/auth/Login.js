import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import {connect}  from 'react-redux'
import {signIn} from '../../redux/actions/authActions'


class Login extends Component {
    state = { 
        email:"",
        password:"",
    }

    handleChange=(e)=>{
        const {name, value }= e.target ;
        
        this.setState({
            [name]:value
        })
    }
    login=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state)
    }
   

    render() { 

        if(this.props.auth){
            return <Redirect to="/" />
        }

        return ( 
            <Container>
                {this.props.authError ?
                    <Alert  variant={'danger'}>{this.props.authError}</Alert>
                 : ""}
                <Row>
                    
                
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="email"
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.handleChange} 
                            size="lg"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password" 
                            name="password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handleChange} 
                            size="lg"
                             />
                        </Form.Group>
                        <Button variant="primary" type="submit" 
                            onClick={this.login}
                        >
                            Login
                        </Button>
                    </Form>
                </Row>
            </Container>
         );
    }
}


const mapStateToProps = state =>{
    return{
        authError:state.authStatus.authError,
        auth:state.authStatus.auth

    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);