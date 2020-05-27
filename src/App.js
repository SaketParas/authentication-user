import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path="/Logout" component={Logout} />
        <Route path="/Admin" component={Admin} />
      </BrowserRouter>
    )
  }
}

export default App
