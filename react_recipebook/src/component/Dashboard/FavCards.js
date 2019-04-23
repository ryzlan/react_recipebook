import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button';

class SearchCards extends Component {
    state = {  }


renderCards=()=>{

  return this.props.recipe.map((r)=>{
    const {id,idMeal, strInstructions, strMeal, strMealThumb } = r;
    if (strInstructions) {
      let ingredients = [];
      for(let i = 1 ; i< 21 ;i++){
          try{
              let a = eval("r.strIngredient" + i);
              let b = eval("r.strMeasure" + i);
              ingredients.push(a +" "+ b );
          }catch(err){
              console.log(err);
          }
      }
      ingredients = ingredients.filter(entry => entry.trim() !== '')
      //


        return(
            <Card key={idMeal} className="horizontal-card">
                        <Card.Img className="fav-img"  src={strMealThumb} />
                        <Card.Body>
                            <Card.Title>{strMeal}</Card.Title>
                            <Card.Text>
                                How to Make: {strInstructions}
                            </Card.Text>
                            
                            <ListGroup className="list-group-flush">
                            {
                              ingredients.map((i ,index)=>{
                               return <ListGroupItem key={index*67}>{i}</ListGroupItem>
                              })  
                            }
                            </ListGroup>
                            <Button variant="danger" 
                            onClick={()=>{this.props.deleteFav(id)}}
                            >delete</Button>
                        </Card.Body>
                    </Card>
             
        )
    }
})
}
    render() { 
        return (<Fragment>
             <h1>Favorite Dishes</h1>
            {this.renderCards()}
            </Fragment>
         );
    }
}
 
export default SearchCards;