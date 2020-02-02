import React, { Component } from 'react';
import { getTopic, getTopics, deleteTopic } from '../actions/topicActions';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import Topic from '../components/topic';
import { Link } from 'react-router-dom';

class TopicContainer extends Component {

  componentDidMount() {
    this.props.getTopic(this.props.topicId, this.props.user.token);
  }

  showTopicWhenLoaded() {
    const topic = this.props.topic.topic_info;
    const questions = this.props.topic.questions;
    if(topic) {
      return(
        <>
          <Topic 
            deleteTopic={this.props.deleteTopic} 
            user={this.props.user} 
            topic={topic} 
            questions={questions} 
            getTopics={this.props.getTopics}
          />
          <div className="container">
            <Link to="/topics"><button className="btn btn-lg border">Back to Topics</button></Link>
          </div>
        </>
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
    topic: state.topic.topic,
    user: state.user
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getTopics: (token) => dispatch(getTopics(URL, token)),
    getTopic: (topicId, token) => dispatch(getTopic(URL, topicId, token)),
    deleteTopic: (topicId, token) => dispatch(deleteTopic(URL, topicId, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);