import React, { Component , Fragment } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import {connect } from 'react-redux'
import {addRecipe} from '../../redux/actions/RecipesActions'


class AddRecipe extends Component {
    state = { 
        name:'',
        url:'https://mamadips.com/wp-content/uploads/2016/11/defimage.gif',
        Ing:'',
        Instr:''
     }
     handleChange=(e)=>{
        const {value,name } = e.target;
        this.setState({
            [name]:value
        })
     }
     handleChangeIng=(e)=>{
         this.setState({
            Ing:e.target.value
         })
     }
     handleChangeInstr=(e)=>{
         this.setState({
             Instr:e.target.value
         })
     }
     handleSubmit =(e)=>{
         e.preventDefault()
         this.props.addRecipe(this.state , this.props.auth.uid)
         this.props.history.push('/dashboard')
     }


    render() { 
        return ( 
            <Container>
                <Row>
                {this.state.error && 
                 <Alert variant={'danger'}>{this.state.error}</Alert>
                }
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of Recipe</Form.Label>
                        <Form.Control 
                        type="name" 
                        placeholder="Thai Soup" 
                        name="name"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        size="lg"
                        
                        
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image url</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Food.jpeg"
                        name="url"
                        variant="outlined"
                        value={this.state.url}
                        onChange={this.handleChange} 
                        size="lg"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingredient(seperated by commas)</Form.Label>
                        <Form.Control as="textarea" rows="3" 
                        variant="outlined"
                        value={this.state.Ing}
                        onChange={this.handleChangeIng} 
                        size="lg"
                        
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Instruction(seperated by periods)</Form.Label>
                        <Form.Control as="textarea" rows="3" 
                        variant="outlined"
                        value={this.state.Instr}
                        onChange={this.handleChangeInstr} 
                        size="lg"
                        
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        ADD
                    </Button>
                </Form>
                </Row>
            </Container>

         );
    }
}
const mapStateToProps =  state=>{
    return {
        auth:state.authStatus.auth
    }
}
 
export default connect(mapStateToProps , {addRecipe})(AddRecipe);