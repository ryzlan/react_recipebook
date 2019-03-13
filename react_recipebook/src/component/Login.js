import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {auth } from '../config/fire';
import Alert from 'react-bootstrap/Alert'

class Login extends Component {
    state = { 
        email:"",
        password:"",
        error:undefined,
        redirectToReferrer:false
    }
    changeError =(e)=>{
        this.setState({
            error:undefined
        })
    }

    handleChange=(e)=>{
        const {name, value }= e.target ;
        
        this.setState({
            [name]:value
        })
    }
    login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email , this.state.password)
            .then((u)=>{
                console.log(u);
                this.setState({
                    redirectToReferrer:true
                })
            })
            .catch((error)=>{
                console.log(error);
                this.setState({
                    error:error.message
                })
            })
    }
    register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email , this.state.password)
        .then((u)=>{
            console.log(u);
            this.props.history.push('/')
        })
        .catch((error)=>{
            console.log(error);
            this.setState({
                error:error.message
            })
            
        })
    }

    render() { 
        let {from ,msg} = this.props.location.state || {from : { pathname: '/'}}
        let {redirectToReferrer} = this.state ;

        if(redirectToReferrer) return <Redirect to={from} />;

        return ( 
            <Container>
                {this.state.error &&
                    <Alert  variant={'danger'}>{this.state.error}</Alert>
                }
                {msg && <Alert  variant={'warning'}>{msg}</Alert>  }
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
                            onFocus={this.changeError}
                            size="lg"
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
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

                        <Button variant="primary" type="submit" 
                        onClick={this.register}
                        >
                            Register
                        </Button>
                    </Form>
                </Row>
            </Container>
         );
    }
}
 
export default Login;