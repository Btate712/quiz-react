import React from 'react';
import { getTopics } from '../actions/topicActions';
import URL from '../appData/applicationConstants';
import { connect } from 'react-redux';
import TopicContainer from './topicContainer';
import NewTopicContainer from './newTopicContainer';
import { Switch, Route, Link } from 'react-router-dom';

class TopicsContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(URL);
  }

  listTopics() {
    const topics = this.props.topics.topicList;
    return(
      topics.map((topic, key) => {
        return (
          <h3 key={key} >
            <Link to={`/topics/${topic.id}`}> {topic.name} </Link>
          </h3>
        ) 
      })
    )
  }
  
  showTopicsWhenLoaded() {
    const topics = this.props.topics.topicList;
    if(topics) {
      return (
        <div>
          {this.listTopics()}
          <Link to="/topics/new"><button className="btn btn-lg border">Create a New Topic</button></Link>
        </div>
      )
    }
  }

  render() {

    return(
      <div>
        <Switch>
          <Route path="/topics/new"><NewTopicContainer /></Route>
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
