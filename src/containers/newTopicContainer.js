import React, { Component } from 'react';
import NewTopicForm from '../components/newTopicForm';
import { connect } from 'react-redux';
import { createTopic } from '../actions/topicActions';
import { URL } from '../appData/applicationConstants';

class NewTopicContainer extends Component {
  render() {
    return (
      <NewTopicForm token={this.props.token} createTopic={this.props.createTopic} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    createTopic: (topicName, token) => dispatch(createTopic(URL, topicName, token))
  })
}

const mapStateToProps = state => {
  return ({
    token: state.user.token
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTopicContainer);