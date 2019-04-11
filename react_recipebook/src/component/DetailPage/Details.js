import React, { Component } from 'react';
import {  WhisperSpinner } from "react-spinners-kit";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { Timeline, TimelineEvent } from "react-event-timeline";
import 'material-icons/iconfont/material-icons.css'


class Details extends Component {





    render() {
        console.log(this.props.detail);
        const { strInstructions, strMeal, strMealThumb } = this.props.detail;
        if (strInstructions) {
            let howtoMake = strInstructions.split('.');
            howtoMake = howtoMake.slice(0,howtoMake.length-1);
            let ingredients = [];
            //strIngredient1
            //strMeasure1
            for(let i = 1 ; i< 21 ;i++){
                try{

                    let a = eval("this.props.detail.strIngredient" + i);
                    let b = eval("this.props.detail.strMeasure" + i);
                    ingredients.push(a +" "+ b );
                }catch(err){
                    console.log(err);
                    
                }
                

            }
            console.log(ingredients);
            ingredients = ingredients.filter(entry => entry.trim() !== '')
            console.log(ingredients);
            
            


            return (
                <Container>
                  { this.props.error && <Alert variant={'danger'}>{this.props.error}</Alert>}
                    <Row className="margin-top">
                        
                            <Col lg={8}>
                            <img
                                src={strMealThumb}
                                alt={strMeal}
                            />
                            </Col>
                            <Col lg={4}>
                            <Timeline>
                                {ingredients.map((i, index) => {
                                    return (
                                        <TimelineEvent
                                            key={index}
                                            title={i}
                                            icon={<i className="material-icons md-36">label_important</i>}
                                            style={{marginBottom:"40px"}}
                                        >   
                                        </TimelineEvent>
                                    )
                                })}
                            </Timeline>

                            </Col>
                                
                            <div>
                            <h2>{strMeal} </h2>
                            { " " }
                        
                            <h3>How to make :</h3>
                            <Timeline>
                                {howtoMake.map((i, index) => {
                                    return (
                                        <TimelineEvent
                                            key={index}
                                            title={"Step " + parseInt(index + 1)}
                                            icon={<i className="material-icons md-18">check_circle</i>}
                                        >
                                            {i}
                                        </TimelineEvent>
                                    )
                                })}
                            </Timeline>
                            </div>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            );
        }else{
          return  <WhisperSpinner loading={this.props.loading}size={500} /> 
        }
    }



}
 
export default Details;