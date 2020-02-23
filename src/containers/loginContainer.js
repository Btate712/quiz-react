import React from 'react';
import LoginForm from '../components/loginForm';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import { URL } from '../appData/applicationConstants';
import ConditionalRedirect from '../components/conditionalRedirect';
import ConditionalMessage from '../components/conditionalMessage';

class LoginContainer extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <ConditionalMessage 
            message="Login Failed. Please Try Again." 
            condition={this.props.user.loginFail}
            className="error"  
          />
        </div>
        <ConditionalRedirect to="/home" condition={this.props.user.loggedIn} />
        <LoginForm login={ this.props.login } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    login: (name, password) => dispatch(login(URL, name, password))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
