import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Redirect} from 'react-router-dom'
import {ClapSpinner} from 'react-spinners-kit'

import {connect} from 'react-redux'
import {register} from '../../redux/actions/authActions'

class Register extends Component {
    state = { 
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }

    handleChange=(e)=>{
        const {name, value }= e.target ;
        
        this.setState({
            [name]:value
        })
    }
   
    handleRegister =(e)=>{
        e.preventDefault();
       // console.log(this.state);
        this.props.register(this.state);
    }

    render() { 
        
        //console.log(this.props);
        if(this.props.auth){
            return <Redirect to="/" />
        }
        return ( 
            <Container>
                {this.props.authError ?
                    <Alert  variant={'danger'}>{this.props.error}</Alert> : ''
                }
                <Row>
                    
                
                    <Form>

                        <Form.Group >
                            <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        variant="outlined"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        size="lg"
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        variant="outlined"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                    
                                        size="lg"
                                    />
                                </Col>


                            </Form.Row>

                        </Form.Group>
                        
                        
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
                        <Form.Row>
                            <Col>
                            <Button variant="primary" type="submit" 
                                onClick={this.handleRegister}>
                            Register 
                            </Button>
                            </Col>
                            <Col>
                            <ClapSpinner size={30} loading={this.props.loading}/>
                            </Col>
                         </Form.Row>   
                        
                         
                    </Form>
                </Row>
            </Container>
         );
    }
}
 
const mapStateToProps = state =>{
    return {
        authError:state.authStatus.authError    ,
        auth:state.authStatus.auth,
        loading :state.authStatus.loading
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        register:(creds)=>dispatch(register(creds)),
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Register);