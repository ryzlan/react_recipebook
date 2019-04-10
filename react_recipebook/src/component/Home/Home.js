import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {  WhisperSpinner } from "react-spinners-kit";


import Search from './Search';
import SearchCards from './SearchCards'

// const edamanID='c1d39a11';
// const edamanKey= '4e55ac919b28c851783901d72f466760';
//const Edmanurl = `https://api.edamam.com/search?q=${q}&app_id=${edamanID}&app_key=${edamanKey}&count=10`
//Chicken cacciatore
{/* <WhisperSpinner 
              loading={this.state.loading}
              size={1000}
          /> */}



class Home extends Component {

    render() { 
        return ( 
          <Fragment>
          <Container>
            <Row>
              <Search label="What do you have in your refrigerator ?"/>
            </Row>
          </Container>
          <Container>
            <h3>
              What can be made with {this.state.defaultQuery}
            </h3>
            <Row className="search-card-container">
           
            <SearchCards  recipe={this.state.recipe} /> 
            </Row>
          </Container>

          <Container>
          <h1>
                Popular Dishes 
              </h1>
            <Row>
              
               <SearchCards recipe={this.state.latest} />
            
            </Row>
          </Container>

           </Fragment>
         );
    }
}
 
export default Home;