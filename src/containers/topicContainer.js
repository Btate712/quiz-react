import React, { Component } from 'react';
import { getTopic, deleteTopic } from '../actions/topicActions';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import Topic from '../components/topic';

class TopicContainer extends Component {

  componentDidMount() {
    this.props.getTopic(this.props.topicId);
  }

  showTopicWhenLoaded() {
    const topic = this.props.topic.topic_info;
    const questions = this.props.topic.questions;
    if(topic) {
      return(
        <Topic deleteTopic={this.props.deleteTopic} topic={topic} questions={questions} />
      )
    }
  }

  render() {
    return (
      <div>
        {this.showTopicWhenLoaded()}
      </div>  
    );
  }
}

const mapStateToProps = state => {
  return({
    topic: state.topic.topic
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getTopic: (topicId) => dispatch(getTopic(URL, topicId)),
    deleteTopic: (topicId) => dispatch(deleteTopic(topicId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);