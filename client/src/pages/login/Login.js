import React, { Component } from "react";
import API from '../../utils/API.js'

class Login extends Component {
    state = {
        Username: "",
        Password: "",
        Remember: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("here");
        event.preventDefault();
        if (this.state.Username && this.state.Password) {
          API.login({
            Username: this.state.Username,
            Password: this.state.Password,
            Remember: this.state.Remember
          })
            .then(res => window.location.reload(true))
            .catch(err => console.log(err));
        }
    };    
    
    render () {
        return (
		<div className="row">
			<main className="col-xs-10 col-sm-8 col-md-4 m-auto ">
				<div className="login-panel card mt-5">
					<div className="card-block">
						<h3 className="card-title text-center mt-1">Login</h3>
						<div className="divider mt-0"></div>
						<form>
							<fieldset>
								<div className="form-group">
									<input className="form-control" placeholder="Username" name="Username" type="text" value={this.state.Username} onChange={this.handleInputChange} />
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Password" name="Password" type="password" value={this.state.Password} onChange={this.handleInputChange} />
								</div>
								<div className="checkbox mt-1 mb-2">
									<label className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" name="Remember" />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">Remember me</span>
                                    </label>
								</div>
								<div className="text-center">
                                    <button type="button" className="btn btn-lg btn-primary" disabled={!(this.state.Username && this.state.Password)} onClick={this.handleFormSubmit}>Login</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</main>
        </div>  
        );      
    }    
}

export default Login;