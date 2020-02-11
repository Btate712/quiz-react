import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import { getUsers } from '../actions/userActions';
import { URL } from '../appData/applicationConstants';
import ProjectAccessForm from '../components/projectAccessForm';

class ProjectAccessContainer extends Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.user.token);
    this.props.getUsers(this.props.user.token);
  }

  renderWhenLoaded = () => {
    if (this.props.projects.projectList.length > 0 && this.props.users.userList.length > 0) {
      return (
        <ProjectAccessForm 
          user={this.props.user}
          projects={this.props.projects}
          users={this.props.users}
        />);
    } else {
      return (<h1>Loading...</h1>);
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderWhenLoaded()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    projects: state.projects,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: token => dispatch(getProjects(URL, token)),
    getUsers: token => dispatch(getUsers(URL, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAccessContainer);