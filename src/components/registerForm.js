import React from 'react';
import { URL } from '../appData/applicationConstants.js'

class RegisterForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.register(URL, this.state.username, this.state.email, this.state.password);
    this.setState({
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="container border">
              <h1>New User:</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input id="username" name="username" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input id="email" name="email" type="email" className="form-control" onChange={this.handleInputChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input id="password" name="password" type="password" className="form-control" onChange={this.handleInputChange} value={this.state.password} />
                </div>
                <div className="form-group">
                  <label>Password Confirmation:</label>
                  <input id="password-confirmation" name="passwordConfirmation" type="password" className="form-control" onChange={this.handleInputChange} value={this.state.passwordConfirmation} />
                </div>
                <input type="submit" className="btn btn-primary"/>
              </form>
              <br />
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;