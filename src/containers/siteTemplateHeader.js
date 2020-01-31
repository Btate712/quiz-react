import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';

class SiteTemplateHeader extends React.Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/topics">Topics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Log In / Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.props.logout}>Log Out</Link>
            </li>
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

export default connect(null, mapDispatchToProps)(SiteTemplateHeader);
