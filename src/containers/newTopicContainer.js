import React, { Component } from 'react';
import NewTopicForm from '../components/newTopicForm';
import { connect } from 'react-redux';
import createTopic from '../actions/createTopic';
import URL from '../appData/applicationConstants';

class NewTopicContainer extends Component {
  render() {
    return (
      <NewTopicForm createTopic={this.props.createTopic} />
    );
  }
}

const mapStateToProps = state => {
  return ({
    topic: state.topic.topic
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createTopic: (topicName) => dispatch(createTopic(URL, topicName))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopicContainer);