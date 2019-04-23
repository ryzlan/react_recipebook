import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import {  WhisperSpinner } from "react-spinners-kit";
import Search from './Search';
import SearchCards from './SearchCards'

import {connect } from 'react-redux'
import {getRecipes ,getLatRecipes} from '../../redux/actions/RecipesActions'


class Home extends Component {
  componentWillMount(){
    this.props.getRecipes();
    this.props.getLatRecipes();
  }




    render() { 
    
      const {
        Ingrecipes ,
        latestrecipes ,
        errorIng,
        errorLat ,
        loadingIng,
        loadingLat
      } = this.props.recipes
      
        return ( 
          <Fragment>
            <Container>
              <Row>
                <Search
                  getRecipes={this.props.getRecipes}
                  label="What do you have in your refrigerator ?" />
              </Row>
            </Container>
            <Container>
              <Row className="search-card-container">
                {
                  loadingIng ?
                    <WhisperSpinner
                      loading={loadingIng}
                      size={500} /> :
                    <SearchCards recipe={Ingrecipes} error={errorIng} />
                }

              </Row>
            </Container>

            <Container>
              <h1>
                Popular Dishes
              </h1>
              <Row>
                {
                  loadingLat ?
                    <WhisperSpinner
                      loading={loadingLat}
                      size={500} /> :
                    <SearchCards recipe={latestrecipes} error={errorLat} />
                }


              </Row>
            </Container>

          </Fragment>
         );
    }
}
const mapStateToProps = (state) =>{
  return {
    recipes:state.recipes
  }
} 

const mapDispatchToProps = (dispatch) =>{
  return {
    getRecipes:(q)=>dispatch(getRecipes(q)),
    getLatRecipes:() => dispatch(getLatRecipes()),
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(Home);