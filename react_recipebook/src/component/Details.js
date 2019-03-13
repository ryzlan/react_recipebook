import React, { Component } from 'react';
import PieCharts from './PieCharts'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { Timeline, TimelineEvent } from "react-event-timeline";
import 'material-icons/iconfont/material-icons.css'

import {auth,db} from '../config/fire'

class Details extends Component {
    state = {
        error:undefined
      }
addToFav=(detail)=>{
    console.log(detail);
     if(auth.currentUser.uid){
        let ref = db.ref().child('favorites')
        let fav = ref.child(auth.currentUser.uid).push(detail)
     }else{
         this.setState({
             error:"You are not Logged in !!"
         })
     }
    



    
}


    render() { 
       // console.log(this.props.details);
        if(this.props.details){
            let obj=[];
            this.props.details.digest.splice(0,13).map((d)=>{
                obj.push({"name":d.label, value:d.daily })
                return null;
            })
            console.log(this.props.showbtn);
            
            return (
                <Container>
                    {this.state.error &&  <Alert  variant={'danger'}>{this.state.error}</Alert>}
                    <Row className="margin-top">
                        <Col>
                        <img
                        src={this.props.details.image}
                        alt={this.props.details.label}
                        />
                        <h2>{this.props.details.label}</h2>
                        {this.props.showbtn === 0 &&
                        <Button 
                            onClick={(e)=>{
                                this.addToFav(this.props.details)
                            }}
                            >
                                Add to Favorite
                            <span className="material-icons favorite">
                                favorite_border
                            </span>
                         </Button>
                        }
                        
                        </Col>
                        <Col>
                        <h3>Ingredients</h3>
                        <Timeline>
                            {this.props.details.ingredients.map((i,index)=>{
                                return(
                                    <TimelineEvent 
                                    key={index}
                                    title={"Step "+ parseInt(index+1) }
                                    icon={<i className="material-icons md-18">check_circle</i>}
                                >
                                     {i.text}
                             </TimelineEvent>
                                )
                            })}
                        </Timeline>
                        </Col>
                    </Row>
                    <Row>
                        <PieCharts data={obj} />
                        
                    </Row>
        
                    
                </Container>
                 );
        }
        return null;
        
    }
}
 
export default Details;