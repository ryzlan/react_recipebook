import React, { Component , Fragment } from 'react';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button';


class AddedRecipes extends Component {
    state = {  }

    renderRecipes =()=>{
       return this.props.recipe.map((r)=>{
            return <div key={r.key} >{r.name}</div>
        })
    }



    render() { 
        if(this.props.userRecipes){
        return ( 
            <Fragment>
                <h1>Your Recipes</h1>
                {this.props.userRecipes.map((r,index)=>{
                    let arr=  r.Ing.split(',');
                    return(
                        <Card key={index*88} className="horizontal-card">
                        <Card.Img  src={r.url} />
                        <Card.Body>
                            <Card.Title>{r.name}</Card.Title>
                            <Card.Text>
                                How to Make: {r.Instr}
                            </Card.Text>
                            
                            <ListGroup className="list-group-flush">
                            {
                              arr.map((i ,index)=>{
                               return <ListGroupItem key={index*67}>{i}</ListGroupItem>
                              })  
                            }
                            </ListGroup>
                            <Button variant="danger" 
                            onClick={()=>{this.props.deleteRecipe(r.id)}}
                            >delete</Button>
                        </Card.Body>
                    </Card>
                    )
                })}

            </Fragment>

         );
        }
        return null;
    }
}
 
export default AddedRecipes;