import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase';


class SearchCards extends Component {
    state = {  }

renderCards=()=>{
  const {recipe ,error} = this.props
  //console.log(recipe);
  
  if(isEmpty(recipe)){
    return( <div>Nothing to see
      <p>{error}</p>
    </div> )
  }else{
    return recipe.map((r)=>{
      return( 
        <Col xs={6} md={4} key={r.idMeal}>
            <Card  className="search-card">
            <Card.Img variant="top" src={r.strMealThumb} />
            <Card.Body>
              <Card.Title>{r.strMeal }</Card.Title>
              <Card.Text>
              <Badge pill variant="warning">
              !
                </Badge>
                </Card.Text>
                <Card.Text>
                <Link 
                to={{
                  pathname: "/details/"+r.idMeal,
                }}
                > Details</Link>
              </Card.Text>

              
            </Card.Body>
        </Card>
        </Col>
      );
    })
  }
}

    render() { 
        return (<Fragment>
            {this.renderCards()}
            </Fragment>
         );
    }
}
 
export default SearchCards;