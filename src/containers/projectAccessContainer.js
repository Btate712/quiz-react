import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';

class ProjectAccessContainer extends Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.user.token)
  }

  render() {
    return (
      <div className="container">
        In Project Access Container
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    projects: state.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: token => dispatch(getProjects(URL, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAccessContainer);