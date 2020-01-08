import React from 'react';
import { URL } from '../appData/applicationConstants.js'

class LoginForm extends React.Component {
  state = {
    username: "temp",
    password: "temp"
  }

  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(URL, this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-1"></div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="container border">
              <h1>User Login</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input id="username" type="text" className="form-control" onChange={this.handleUserNameChange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input id="password" type="password" className="form-control" onChange={this.handlePasswordChange} value={this.state.password} />
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

export default LoginForm;
