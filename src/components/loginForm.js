import React from 'react';
import { URL } from '../appData/applicationConstants.js';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
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
                  <input name="username" id="username" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input name="password" id="password" type="password" className="form-control" onChange={this.handleInputChange} value={this.state.password} />
                </div>
                <input type="submit" className="btn btn-primary"/>
                <Link to="/register"><button className="btn btn-primary pull-right">Register New User</button></Link>
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
