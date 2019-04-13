import React, { Component } from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from './redux/actions/authActions'
import requireAuth from './HOC/requireAuth'


import Navigation from './component/Navigations/Navigation'
import Page404 from './component/Page404'
import DetailsPage from './component/DetailPage/DetailsPage'
import Login from './component/auth/Login'
import Dashboard from './component/Dashboard/Dashboard'
import Register from './component/auth/Register';
import AddRecipe from './component/Create/AddRecipe';
import Home from './component/Home/Home';
import NotAuthorized from './component/NotAuthorized'


class App extends Component {


componentWillMount(){
  this.props.fetchUser();


}

  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/dashboard' component={requireAuth(Dashboard)}  />
        <Route path="/details/:id" component={requireAuth(DetailsPage)} />
        <Route path='/create' component={requireAuth(AddRecipe)}  />
        <Route path='/NotAuthorized' component={NotAuthorized} />
        <Route component={Page404} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}




export default  connect(null, {fetchUser})(App);
