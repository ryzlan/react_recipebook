import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'


class SearchCards extends Component {
    state = {  }

renderCards=()=>{
  return this.props.recipe.map((r)=>{
        
        return(<Col xs={6} md={4} key={r.recipe_id}>
            <Card key={r.recipe_id} className="search-card">
                 <Card.Img variant="top" src={r.image_url} />
                 <Card.Body>
                   <Card.Title>{r.title }</Card.Title>
                   <Card.Text>
                    <Badge pill variant="warning">
                         RATING : {parseInt((r.social_rank/100)*100)+"%" }
                     </Badge>
                     </Card.Text>
                     <Card.Text>
                     <Link 
                      to={{
                        pathname: "/details/"+r.recipe_id,
                        search: "?name="+r.title+"&fav=0" ,
                      }}
                     > Details</Link>
                   </Card.Text>

                   
                 </Card.Body>
             </Card>
             </Col>
        )
    })
}

    render() { 
        return (<Fragment>
            {this.renderCards()}
            </Fragment>
         );
    }
}
 
export default SearchCards;