import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


class Search extends Component {
    state = { 
      query:''
    }

    handleChange =  event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    handleSubmit = e =>{
      e.preventDefault();

      this.props.getQuery(this.state.query);
      this.setState({
        query:''
      })
    } 


    render() { 
        
        return (
             <Form className="form" onSubmit={this.handleSubmit} >
             <Form.Group  className="form-grp">
             <Form.Label>What Should I Cook Today ?</Form.Label>
              <Form.Control 
              placeholder={this.props.label}
              className="input"
              type="text"
              name="query"
              variant="outlined"
              value={this.state.query}
              onChange={this.handleChange} 
              size="lg"
              />
           </Form.Group>
             
            
            </Form>
          );
    }
}
 



export default Search;