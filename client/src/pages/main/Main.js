import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../../components/header';
import SideMenu from '../../components/sidemenu';
import UserManager from '../../components/usermanager';
import API from '../../utils/API.js';

const Main = () =>
    <div className="col-12 p-0 m-0">
        <Header />
        <Router> 
            <div className="row">
                <SideMenu />
                <Switch>
                    <Route component={UserManager} />   
                    <Route exact path="/usermanager" component={UserManager} />
                </Switch>
            </div>
        </Router>
    </div>;

export default Main;