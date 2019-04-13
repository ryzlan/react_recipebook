

import React, { Component } from 'react';

class NotAuthorized extends Component {
    state = {  }
    render() { 
        return (<h1>NOT NotAuthorized  {this.props.msg}</h1> );
    }
}
 
export default NotAuthorized;

