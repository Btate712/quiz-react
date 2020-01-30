import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

class SiteTemplateHeader extends React.Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quiz">Quiz</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Log In / Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={this.props.logout}>Log Out</a>
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
