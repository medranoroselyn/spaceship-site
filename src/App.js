import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Products}/>  
      </Switch> 
    </BrowserRouter>
    );
  }
}

export default App;
