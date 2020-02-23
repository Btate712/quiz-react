import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';

class SiteTemplateHeader extends React.Component {

  adminLinks = () => {
    if (this.props.user.admin) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/project-access">Assign Project Access</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/questions">Question List</Link>
          </li>
        </>
      )
    }
  } 

  loginOrLogout = () => {
    if(this.props.user.loggedIn) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          {this.adminLinks()}
          <li className="nav-item">
            <Link className="nav-link" to="/topics">Topics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quiz">Quiz</Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.props.logout}>Log Out {this.props.user.name}</Link>
          </li>
        </>
      )
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log In / Register</Link>
        </li>
      )
    }
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            {this.loginOrLogout()}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteTemplateHeader);
