import React from 'react';
import getTopics from '../actions/getTopics';
import URL from '../appData/applicationConstants';
import { connect } from 'react-redux';
import Topic from '../components/topic';

class TopicsContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(URL);
  }

  showTopicsWhenLoaded() {
    const topics = this.props.topics.topicList;
    console.log(topics);
    if(topics) {
      return topics.map((topic, key) => <Topic key={key} id={topic.id} name={topic.name} /> );
    }
  }

  render() {
    return(
      <div>
        {this.showTopicsWhenLoaded()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getTopics: (url) => dispatch(getTopics(url))
  });
}

const mapStateToProps = state => {
  return ({
    topics: state.topics
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
