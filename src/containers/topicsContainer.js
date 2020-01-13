import React from 'react';
import getTopics from '../actions/getTopics';
import URL from '../appData/applicationConstants';
import { connect } from 'react-redux';
import Topic from '../components/topic';
import TopicContainer from './topicContainer';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path={"/topics/:id"} render={({match}) => {
            const id = match.params.id;
            return (<TopicContainer topicId={id} />);
          }} />
          <Route path="/topics">{this.showTopicsWhenLoaded()}</Route>
        </Switch>
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
