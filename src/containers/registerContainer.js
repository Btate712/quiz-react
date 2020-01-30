import React from 'react';
import RegisterForm from '../components/registerForm';
import { connect } from 'react-redux';
import { register } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

class RegisterContainer extends React.Component {

  homeOrRegister() {
    if (this.props.user.loggedIn) {
      return(<Redirect to="/home" />);
    } else {
      return(<RegisterForm register={ this.props.register } />);
    }
  }

  render() {
    return (
      <div>
        { this.homeOrRegister() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    register: (url, name, email, password) => dispatch(register(url, name, email, password))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);