import React, { Component,Fragment } from 'react';
import {auth, db} from '../../config/fire';

import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import FavCards from './FavCards'
import AddedRecipes from './AddedRecipes';


class Dashboard extends Component {
    state = {
        favs:undefined,
        recipes:undefined,
        modalShow:false,
        msg:''

    }
    componentDidMount(){
        this.getFavs();
        this.getOwnRecipes();
    
    }

    getFavs(){
        let ref = db.ref().child('favorites')
        let userfavs = ref.child(this.props.user.uid);
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
               favs:obj
           })
        })
    }

    getOwnRecipes(){
        let ref = db.ref().child('recipes')
        let userRecipes = ref.child(this.props.user.uid);
        userRecipes.orderByKey().on('value' , (snap)=>{
            console.log('added' , snap.val() );
           let obj=[]
           let favs= snap.val();
            if(favs == null )
            {
                this.setState({
                    msg:"No Recipes added"
                });
                console.log(this.state.msg);
                
            }else{
                let keys = Object.keys(favs)
                for(let i = 0; i<keys.length ; i++){
                    let k= keys[i]
                    obj.push(  favs[k]  ) 
                }
                console.log(obj);
                this.setState({
                    recipes:obj
                })
            }
           
           
        });
    }
    
    notify=()=>{
        console.log('added Recipes');
        
    }

    render() { 
        
        return (
        <Fragment>
        <Container>
            <Row>
                
                <Col  xs={12} md={8}>
                <Container>
                    <h1>Favorite Dishes</h1>
                    <Row>
                {this.state.favs && <FavCards recipe={this.state.favs} /> } 
                    </Row>
                </Container>
                </Col>
            </Row>
            <Row>
                {this.state.recipes && <AddedRecipes recipe={this.state.recipes} /> }
                
            </Row>


        </Container>
        </Fragment>);
    }
}
 
export default Dashboard;