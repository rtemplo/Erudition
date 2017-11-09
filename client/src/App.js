import React, { Component } from 'react';
import API from './utils/API.js'
import Login from './pages/login'
import Main from './pages/main'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  state = {
    entityID: 1,
    authenticated: false
  }

  componentDidMount () {
    this.checkLogin();
  }

  checkLogin = () => {
    API.authenticate()
    .then(res => {
      this.setState({authenticated:res.data.auth});
      //console.log(this.state.authenticated);
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <div>{(this.state.authenticated)?<Main />:<Login />}</div>
      </div>
    );
  }
}

export default App;
