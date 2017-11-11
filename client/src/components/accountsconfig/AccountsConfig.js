import React, { Component } from "react";
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import API from '../../utils/API.js'

const SortableItem = SortableElement(({value}) => {
    return (
        <div className="row">        
            <div className="col-2">
                {value.colName}
            </div>
            <div className="col-3">
                <input type="text" className="form-control-sm" name={`colLabel_${value.colName}`} value={value.colLabel} />
            </div>
            <div className="col-5 d-flex justify-content-around">
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.modify} name={`modify_${value.colName}`} /></label>
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.display} name={`display_${value.colName}`} /></label>
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.showValue} name={`showvalue_${value.colName}`} /></label>
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.modify2} name={`modify2_${value.colName}`} /></label>
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.display2} name={`display2_${value.colName}`} /></label>
                <label className="form-check-label"><input className="form-check-input" type="checkbox" checked={value.showValue2} name={`showvalue2_${value.colName}`} /></label>
            </div>
            <div className="col-2">
                {(value.tableAlias == 'a1' ? 'Standard' : 'Custom')}
            </div>
        </div>
    );
});

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="col-12">
            {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

class AccountsConfig extends Component {
    state = {
        items:[]
    }

    getAccountsConfig = () => {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        API.getconfig()
        .then(res => {
            console.log(res.data.recordset);
            this.setState({items: res.data.recordset});
        })
        .catch(err => console.log("boom"));

        console.log("++++++++++++++++++++++++++++++++++++");
    }        

    componentDidMount () {
        this.getAccountsConfig();
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    render() {
        return (
            <main className="col-xs-12 col-sm-12 col-lg-9 col-xl-10 pt-3 pl-4 ml-auto">						
                <section className="row">
                    <div className="col-12">
                        
                        <section className="row">
                            <div className="col">
                                <div className="card mb-4">
                                    <div className="card-block">
                                        <h3 className="card-title">Account Field Configuration</h3>
                                        <form className="form">
                                            <div className="row">        
                                                <div className="col-2">
                                                    Column
                                                </div>
                                                <div className="col-3">
                                                    Column Label
                                                </div>
                                                <div className="col-5 d-flex justify-content-around">
                                                    <span>M</span>
                                                    <span>D</span>
                                                    <span>S</span>
                                                    <span>M1</span>
                                                    <span>D2</span>
                                                    <span>S2</span>
                                                </div>
                                                <div className="col-2">
                                                    Type
                                                </div>
                                                
                                            </div>
                                            <hr/>
                                            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                                        </form>
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

export default AccountsConfig;