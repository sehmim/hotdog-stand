import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// My Componenets
import OrderSteps from "./components/OrderSteps";

//CSS 
class RouteComponent extends Component {
  state ={
    loggedIn : true
  }
  render() {    
    return (
      <Router>
        <div>
          <Route exact path="/order" component={ OrderSteps }/>
        </div>
    </Router>
    );
  }
}
export default RouteComponent;


