import React, { Component } from 'react';
import NewTopicForm from '../components/newTopicForm';
import { connect } from 'react-redux';
import { createTopic, getTopics } from '../actions/topicActions';
import { URL } from '../appData/applicationConstants';
import { getProjects } from '../actions/projectActions';

class NewTopicContainer extends Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.token);
  }

  render() {
    return (
      <NewTopicForm 
        token={this.props.token} 
        getTopics={this.props.getTopics} 
        createTopic={this.props.createTopic} 
        projects={this.props.projects}  
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    createTopic: (topicName, projectId, token) => dispatch(createTopic(URL, topicName, projectId, token)),
    getTopics: (token) => dispatch(getTopics(URL, token)),
    getProjects: (token) => dispatch(getProjects(URL, token))
  })
}

const mapStateToProps = state => {
  return ({
    token: state.user.token,
    projects: state.projects.projectList
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTopicContainer);