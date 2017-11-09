import React, { Component } from "react";
import API from '../../utils/API.js'

class UserManager extends Component {
    state = {
        accountdata: []
    }

    componentDidMount () {
        this.getAccounts();
    }

    getAccounts = () => {
        API.getaccounts()
        .then(res => {
            console.log(res.data.recordsets[0]);
            this.setState({accountdata:res.data});
            //console.log(this.state.authenticated);
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <main className="col-xs-12 col-sm-12 col-lg-9 col-xl-10 pt-3 pl-4 ml-auto">						
                <section className="row">
                    <div className="col-12">
                        
                        <section className="row">
                            <div className="col">
                                <div className="card mb-4">
                                    <div className="card-block">
                                        <h3 className="card-title">User Records</h3>
                                        
                                        <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Username</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Company</th>
                                                    <th>Department</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            
                                            <tfoot>
                                                <tr>
                                                    <th>Username</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Company</th>
                                                    <th>Department</th>
                                                    <th>Status</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td>TNixon</td>
                                                    <td>Tiger</td>
                                                    <td>Nixon</td>
                                                    <td>tnixon@email.com</td>
                                                    <td>Premier Farnell</td>
                                                    <td>Product Development</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>GWinters</td>
                                                    <td>Garrett</td>
                                                    <td>Winters</td>
                                                    <td>gwinters@email.com</td>
                                                    <td>Premier Farnell</td>
                                                    <td>BI Integration</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>ACox</td>
                                                    <td>Ashton</td>
                                                    <td>Cox</td>
                                                    <td>acox@email.com</td>
                                                    <td>Avnet</td>
                                                    <td>Marketing & Web Presence</td>
                                                    <td>Inactive</td>
                                                </tr>
                                            </tbody>                                            
                                        
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                        </section>

                    </div>
                </section>
            </main>
        );
    }
}

export default UserManager;