import React, { Component } from "react";
import API from '../../utils/API.js'

class UserManager extends Component {
    state = {
        tablecols:[],
        accountdata: []
    }

    componentWillMount () {
        this.getAccounts();
    }

    componentDidMount () {
        //window.jQuery('#userrecords').DataTable();
    }

    getAccounts = () => {
        API.getaccounts()
        .then(res => {
            this.setState({tablecols: res.data.recordsets[0], accountdata:res.data.recordsets[1]});
            //console.log(this.state.tablecols);
            //console.log(this.state.accountdata);

            // this.state.accountdata.map((coldata, idx) => {
            //     this.state.tablecols.map((col, idx2) => {
            //         //console.log(col);
            //         console.log(coldata[col.selectionCol]);
            //     });
            // });            
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
                                        
                                        <table id="userrecords" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                {this.state.tablecols.map((col, idx) => (
                                                    <th key={idx}>{col.selectionCol}</th>
                                                ))}
                                                </tr>
                                            </thead>
                                            
                                            <tfoot>
                                                <tr>
                                                {this.state.tablecols.map((col, idx) => (
                                                    <th key={idx}>{col.selectionCol}</th>
                                                ))}
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                            {this.state.accountdata.map((coldata, idx) => (
                                                <tr key={idx}>
                                                {this.state.tablecols.map((col, idx2) => (
                                                    <td key={idx2}>{coldata[col.selectionCol]}</td>
                                                ))}
                                                </tr>
                                            ))}
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