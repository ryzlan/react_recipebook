import React, { Component } from 'react';
import {BrowserRouter , Route , Link , Switch , Redirect } from 'react-router-dom'

import {auth} from './config/fire'
import Navigation from './component/Navigation'
import Page404 from './component/Page404'
import DetailsPage from './component/DetailsPage'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Register from './component/auth/Register';
import AddRecipe from './component/Create/AddRecipe';
import Home from './component/Home/Home';


class App extends Component {
state={
  user:{}
}
componentDidMount(){
  this.authListener();
}
authListener(){
    auth.onAuthStateChanged((user) =>{
      //console.log(user);
      if(user){
        this.setState({
          user:user
        })
        //localStorage.setItem('user', user.uid)
      }else{
        this.setState({
          user:null
        })
       // localStorage.removeItem('user')
      }
      
    })
  }
//<PrivateRoute path="/details/:code" component={DetailsPage} user={this.state.user}  />

  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path='/dashboard' component={Dashboard}  />
      <Route path="/details/:code" component={DetailsPage} />
      <Route path='/create' component={AddRecipe}  />
      <Route component={Page404} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}


function PrivateRoute({component: Component, user ,...rest } ){
  return(
    <Route 
    {...rest}
     render={ props =>
      user ? 
      (<Component {...props} user={user} /> ) : 
      (<Redirect to={{
        pathname:'/login',
        state:{
          from:props.location,
          msg:"You Must Login to View this Content!!!"
        }
      }} /> 
      )
    }
    />
  );
}

export default App;
