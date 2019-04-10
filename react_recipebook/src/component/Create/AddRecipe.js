import React, { Component , Fragment } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {db,auth} from '../../config/fire'


class AddRecipe extends Component {
    state = { 
        name:'',
        url:'',
        Ing:'',
        Instr:'',
        error:undefined
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
         const {name,url , Ing ,Instr} = this.state
         if(!(name.length > 2 && url.length > 2 && Ing.length > 2 && Instr.length > 2 )){
            this.setState({
                error:'Some Input Feilds are Empty !!'
            })
            return
         }
        //  let ing= this.state.Ing.split(",")
        //  let instr = this.state.Instr.split(".")

        
         //save in db 
         if(auth.currentUser.uid){
            let ref = db.ref().child('recipes')
            let recipe = ref.child(auth.currentUser.uid).push();

            let obj = {
                key:recipe.key,
                name:name,
                image:url,
                ingredients:Ing,
                instruction:Instr
            }
            console.log(obj);




            recipe.set(obj)
            console.log('added recipes ');
            
            }else{
            this.setState({
                error:"You are not Logged in !!"
            })
        }
     }


    render() { 
        return ( 
            <Fragment>
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
            </Fragment>

         );
    }
}
 
export default AddRecipe;