import React from 'react';
import { Link } from 'react-router-dom';
import { useInputChange } from '../helperFunctions';

function LoginForm(props) {

  const [input, handleInputChange, setInput] = useInputChange({
    username: "",
    password: ""
  })

  const handleSubmit = event => {
    event.preventDefault();
    props.login(input.username, input.password);
    setInput({
      username: "",
      password: ""
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-1"></div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="container border">
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <input name="username" id="username" type="text" className="form-control" onChange={handleInputChange} value={input.username} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input name="password" id="password" type="password" className="form-control" onChange={handleInputChange} value={input.password} />
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

export default LoginForm;
