import React from 'react';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import AddTopicToProjectForm from '../components/addTopicToProjectForm';
import { getProjects, addTopicToProject } from '../actions/projectActions';

class ProjectTopicsContainer extends React.Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.user.token);
  } 

  handleAddToProject = (projectId) => {
    addTopicToProject(URL, this.props.topic.id, projectId, this.props.user.token);
  }

  renderWhenLoaded = () => {
    if(this.props.projects.projectList.length > 0) {
      return (
      <AddTopicToProjectForm 
        projects={this.props.projects.projectList} 
        handleAddToProject={this.handleAddToProject} 
        topic={this.props.topic}
      />
      );
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
  return ({
    user: state.user,
    topic: state.topic.topic.topic_info,
    projects: state.projects
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    getProjects: (token) => dispatch(getProjects(URL, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTopicsContainer);