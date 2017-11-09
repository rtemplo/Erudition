import React, { Component } from "react";
import API from '../../utils/API.js'

class SideMenu extends Component {
    logout = () => {
        API.logout().then((res) => {
            console.log(res.data.msg);
            window.location.reload(true);
        });
    }

    render () {
        return (
            <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2">
                <a href="#menu-toggle" className="btn btn-default" id="menu-toggle"><em className="fa fa-bars"></em></a>

                <ul className="nav nav-pills flex-column sidebar-nav">
                    <li className="nav-item"><a className="nav-link" href="manager.html"><em className="fa fa-dashboard"></em> Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="/usermanager"><em className="fa fa-user"></em> User Management</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><em className="fa fa-user"></em> Surveys</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><em className="fa fa-user"></em> Content Distribution</a></li>
                    <li className="parent nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#sub-item-1">
                            <em className="fa fa-file-o">&nbsp;</em> Pages <span data-toggle="collapse" href="#sub-item-1" className="icon pull-right"><i className="fa fa-plus"></i></span>
                        </a>
                        <ul className="children collapse" id="sub-item-1">
                            <li className="nav-item"><a className="nav-link" href="login.html">
                                Login
                            </a></li>
                            <li className="nav-item"><a className="nav-link" href="error.html">
                                Error 404
                            </a></li>
                        </ul>
                    </li>
                </ul>

                <a className="logout-button"onClick={() => this.logout()}><em className="fa fa-power-off"></em> Signout</a>
            </nav>            
        );
    }
}

export default SideMenu;