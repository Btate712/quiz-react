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
              <Link className="nav-link" href="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Log In / Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/" onClick={this.props.logout}>Log Out</Link>
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
