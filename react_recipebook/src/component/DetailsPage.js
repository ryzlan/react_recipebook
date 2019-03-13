import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import queryString from 'query-string'
import {  WhisperSpinner } from "react-spinners-kit";


import Details from './Details'
//const fork2KEY = '588f77612dea8bd1e7a8e33349b096e6'
//const fork2foodurl = `https://www.food2fork.com/api/get?key=${fork2KEY}&rId=${rid}`
const edamanID='c1d39a11';
const edamanKey= '4e55ac919b28c851783901d72f466760';




class DetailsPage extends Component {
    state = { 
        details:undefined,
        loading:false,
        showbtn:0
     }
    componentDidMount(){
        this.getRecipeDetails()
        this.setState({
            loading:true
        })
    }

    getRecipeDetails= async()=>{
        const values = queryString.parse(this.props.location.search)
        console.log(values);
        
        let name= values.name
        let fav =parseInt( values.fav);
    
        
        let url =`https://api.edamam.com/search?q=${name}&app_id=${edamanID}&app_key=${edamanKey}&count=1`
       // console.log(url);
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data.hits[0].recipe);
        
        this.setState({
            details:data.hits[0].recipe,
            loading:false,
            showbtn:fav
        })

    }
    render() { 
        console.log(this.state.showbtn);
        
        return ( 
                <Container>
                    <Row>
                        {
                            this.state.loading ?  
                            <WhisperSpinner 
                                loading={this.state.loading}
                                size={1000}
                            />
                            :
                            this.state.details &&
                            <Details 
                            details={this.state.details} 
                            showbtn={this.state.showbtn}/>
                        }
                    </Row>
             </Container>
         );
    }
}
 
export default DetailsPage;