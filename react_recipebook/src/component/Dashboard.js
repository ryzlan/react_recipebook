import React, { Component,Fragment } from 'react';
import {auth, db} from '../config/fire';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import FavCards from './FavCards'

class Dashboard extends Component {
    state = {
        data:undefined
    }
    componentDidMount(){
        console.log(this.props.user);
        let ref = db.ref().child('favorites')
        let userfavs = ref.child(auth.currentUser.uid);
        userfavs.orderByKey().on('value' , (snap)=>{
            //console.log('added' , snap.val() );
            let obj=[]
           let favs= snap.val();
           let keys = Object.keys(favs)
           for(let i = 0; i<keys.length ; i++){
               let k= keys[i]
               obj.push(  favs[k]  ) 
           }
           console.log(obj);
           this.setState({
               data:obj
           })
        })
    }

    render() { 
        return (
        <Fragment>
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <div>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.user.email}</Card.Title>
                    </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col  xs={12} md={8}>
                <Container>
                    <h1>Favorite Dishes</h1>
                    <Row>
                    {this.state.data && <FavCards recipe={this.state.data} /> } 
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
        </Fragment>);
    }
}
 
export default Dashboard;