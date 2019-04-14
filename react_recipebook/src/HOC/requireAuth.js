import React, { Component } from 'react';
import {connect} from 'react-redux'



export default function(WrappedComponent){
    class Authentication extends Component{
        componentWillMount(){
            if(this.props.authenticated  === null ){
               this.props.history.push('/NotAuthorized');
               //this.context.router.history.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.props.history.push('/NotAuthorized');
               // this.context.router.history.push('/')
            }
        }

        render(){
            
            if(this.props.authenticated){
                return <WrappedComponent   {...this.props }/>
            }
            return null;
        }
    }

 const mapStateToProps = state =>{
     return{
         authenticated: state.authStatus.auth
     }
 }


    return connect(mapStateToProps)(Authentication)
}




//ANOTHER WAY OF AUTHENTICATINNG ROUTES 


// authListener(){
//     auth.onAuthStateChanged((user) =>{
//       //console.log(user);
//       if(user){
//         this.setState({
//           user:user
//         })
//         //localStorage.setItem('user', user.uid)
//       }else{
//         this.setState({
//           user:null
//         })
//        // localStorage.removeItem('user')
//       }
      
//     })
//   }
//<PrivateRoute path="/details/:code" component={DetailsPage} user={this.state.user}  />
// function PrivateRoute({component: Component, user ,...rest } ){
//     return(
//       <Route 
//       {...rest}
//        render={ props =>
//         user ? 
//         (<Component {...props} user={user} /> ) : 
//         (<Redirect to={{
//           pathname:'/login',
//           state:{
//             from:props.location,
//             msg:"You Must Login to View this Content!!!"
//           }
//         }} /> 
//         )
//       }
//       />
//     );
//   }

//ENDS HERE 