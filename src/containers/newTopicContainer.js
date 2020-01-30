import React, { Component } from 'react';
import NewTopicForm from '../components/newTopicForm';
import { connect } from 'react-redux';
import { createTopic } from '../actions/topicActions';
import URL from '../appData/applicationConstants';

class NewTopicContainer extends Component {
  render() {
    return (
      <NewTopicForm createTopic={this.props.createTopic} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    createTopic: (topicName) => dispatch(createTopic(URL, topicName))
  })
}

export default connect(null, mapDispatchToProps)(NewTopicContainer);