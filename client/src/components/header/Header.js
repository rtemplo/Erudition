import React, { Component } from "react";
import API from '../../utils/API.js';

class Header extends Component {
    state = {

    }

    logout = () => {
        API.logout().then((res) => {
            console.log(res.data.msg);
            window.location.reload(true);
        });
    }    

    render () {
        return (
            <div className="row">
                <div className="col-12">
                    <header className="page-header row justify-center">
                        <div className="col-md-6 col-lg-8" >
                            <h1 className="site-title"><a href="index.html"><em className="fa fa-rocket"></em> Erudition CMS</a></h1>
                        </div>
                        <div className="dropdown user-dropdown col-md-6 col-lg-4 text-center text-md-right">
                            <a className="btn btn-stripped dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="images/profile-pic.jpg" alt="profile photo" className="circle float-left profile-photo" width="50" height="auto" />
                                <div className="username mt-1">
                                    <h4 className="mb-1">Username</h4>
                                    <h6 className="text-muted">Super Admin</h6>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" style={{marginRight: 1.5 + 'rem'}} aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item"><em className="fa fa-user-circle mr-1"></em> View Profile</a>
                            <a className="dropdown-item"><em className="fa fa-sliders mr-1"></em> Preferences</a>
                            <a className="dropdown-item" onClick={() => this.logout()}><em className="fa fa-power-off mr-1"></em> Logout</a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </header>
                </div>	
            </div>            
        );
    }
}

export default Header;