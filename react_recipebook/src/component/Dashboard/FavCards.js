import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'

class SearchCards extends Component {
    state = {  }


  removeFavs=(id)=>{

  }




renderCards=()=>{
  return this.props.recipe.map((r)=>{
        
        return(<Col xs={6} md={6} key={r.uri}>
            <Card key={r.uri} className="search-card">
                 <Card.Img variant="top" src={r.image} />
                 <Card.Body>
                   <Card.Title>{r.label}</Card.Title>
                   <Card.Text>
                    <Badge pill variant="warning">
                         calories : {parseInt(r.calories) }
                     </Badge>
                     </Card.Text>
                     <Card.Text>
                     <Link 
                      to={{
                        pathname: "/details/1111",
                        search: "?name="+r.label+"&fav=1" ,
                      }}
                     > Details</Link>
                   <button onClick={this.removeFavs({r.})}>Remove favs</button>
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