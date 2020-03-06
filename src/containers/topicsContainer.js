import React from 'react';
import { getTopics } from '../actions/topicActions';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import TopicContainer from './topicContainer';
import NewTopicContainer from './newTopicContainer';
import { Switch, Route, Link } from 'react-router-dom';
import LoadingMessage from '../components/loadingMessage';

class TopicsContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(this.props.user.token);
  }

  listTopics() {
    const topics = this.props.topics.topicList.sort((a,b) => a.name > b.name ? 1 : -1);
    return(
      topics.map((topic, key) => {
        const lastQuestionDate = new Date(topic.dateLastQuestionAdded)
        return (
          <h3 key={key} >
            <Link to={`/topics/${topic.id}`}> 
            {topic.name} - 
            {` ${lastQuestionDate.getMonth() + 1}/${lastQuestionDate.getDate()}/${lastQuestionDate.getFullYear()}`} </Link>
          </h3>
        ) 
      })
    )
  }
  
  showTopicsWhenLoaded() {
    if(this.props.topics.inProgress) {
      return (
        <LoadingMessage />
      )
    } else {
      return (
        <div className="container">
          <h1><u>Topics: (date last question added)</u></h1>
          {this.listTopics()}
          {this.adminButtons()}
        </div>
      )
    }
  }
  
  adminButtons = () => {
    if (this.props.user.admin) {
      return (
        <Link to="/topics/new"><button className="btn btn-primary">Create a New Topic</button></Link>
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
            return (<TopicContainer  topicId={id} />);
          }} />
          <Route path="/topics" count={this.props.topics.topicList.length}>{this.showTopicsWhenLoaded()}</Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getTopics: (token) => dispatch(getTopics(URL, token))
  });
}

const mapStateToProps = state => {
  return ({
    topics: state.topics,
    user: state.user
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
