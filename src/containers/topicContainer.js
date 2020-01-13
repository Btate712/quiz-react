import React, { Component } from 'react';
import getTopic from '../actions/getTopic';
import { connect } from 'react-redux';
import URL from '../appData/applicationConstants';
import Topic from '../components/topic';

class TopicContainer extends Component {

  componentDidMount() {
    this.props.getTopic(URL, this.props.topicId);
  }

  showTopicWhenLoaded() {
    const topic = this.props.topic.topic_info;
    const questions = this.props.topic.questions;
    if(topic) {
      return(
        <Topic topic={topic} questions={questions} />
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
    getTopic: (url, topicId) => dispatch(getTopic(url, topicId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);