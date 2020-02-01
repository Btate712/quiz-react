import React from 'react';
import LoginForm from '../components/loginForm';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import { Redirect } from 'react-router-dom';
import { URL } from '../appData/applicationConstants';

class LoginContainer extends React.Component {

  homeOrLogin() {
    if (this.props.user.loggedIn) {
      return(<Redirect to="/home" />);
    } else {
      return(<LoginForm login={ this.props.login } />);
    }
  }

  render() {
    return (
      <div>
        { this.homeOrLogin() }
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
