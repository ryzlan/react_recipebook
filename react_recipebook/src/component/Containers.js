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

const fork2KEY = '914b114e95feea3b5256e878566f4ccf'
//const fork2foodurl = `https://www.food2fork.com/api/search?key=${fork2KEY}&q=${q}`


class Containers extends Component {
    state={
        recipe:undefined,
        latest:undefined,
        loading:false,
        error:null,
        defaultQuery:"Chicken Breast"
      }
componentDidMount(){
  this.setState({
    loading:false
  })
 // this.getPopularDishes();
  this.getRecipe();
}


      getQuery=(q)=>{
        console.log(q);
        this.setState({
          loading:true
        })
        this.getRecipe(q);
      }
      getRecipe= async(q = this.state.defaultQuery )=>{
        this.setState({

        })
        let url = `https://www.food2fork.com/api/search?key=${fork2KEY}&q=${q}`
        console.log(url);
        
        let res = await fetch(url);
        
        if(res.status !== 200 ){
          this.setState({
            error:"The api is Going through  Maintainance"
          })
    
          console.log(res);
          
        }
    
        let data = await res.json();
        
        console.log(data);
        
        if(data.recipes.length === 0  ){
          this.setState({
            error:'No Such Recipe with that name '
          })
          console.log(this.state.error);
          
        }
        

       
        this.setState({
          recipe:data.recipes.splice(0,6),
          loading:false
        })
        
    
      }


      getPopularDishes= async()=>{
        let url = `https://www.food2fork.com/api/search?key=${fork2KEY}`
        let res = await fetch(url);
        if(res.status !== 200 ){
          this.setState({
            error:"The api is Going through  Maintainance"
          })
    
          console.log(res);
          
        }
        let data = await res.json();
        console.log(data.recipes.splice(0,6));
        
        if(data.recipes.length === 0  ){
          this.setState({
            error:'No Such Recipe with that name '
          })
          console.log(this.state.error);
          
        }
       
        
        this.setState({
          latest:data.recipes.splice(0,6),
          loading:false
        })


      }

    render() { 
        return ( 
          <Fragment>
          <Container>
            <Row>
            <Search 
            getQuery={this.getQuery}
            label="What do you have in your refrigerator ?"/>
            </Row>
          </Container>
          <Container>
            <h3>
              What can be made with {this.state.defaultQuery}
            </h3>
            <Row className="search-card-container">
            {this.state.loading ? 
              <WhisperSpinner 
              loading={this.state.loading}
              size={1000}
          />
            : this.state.recipe &&
            <SearchCards  
            recipe={this.state.recipe} /> 
             }
            </Row>
          </Container>

          <Container>
          <h1>
                Popular Dishes 
              </h1>
            <Row>
              
             {this.state.loading ? 
               <WhisperSpinner 
               loading={this.state.loading}
               size={1000}
           /> :
               this.state.latest &&  <SearchCards recipe={this.state.latest} />
            }
            </Row>
          </Container>

           </Fragment>
         );
    }
}
 
export default Containers;