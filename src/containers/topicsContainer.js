import React from 'react';
import { getTopics } from '../actions/topicActions';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import TopicContainer from './topicContainer';
import NewTopicContainer from './newTopicContainer';
import { Switch, Route, Link } from 'react-router-dom';

class TopicsContainer extends React.Component {
  state = {
    sorted: false
  }

  componentDidMount() {
    this.props.getTopics(this.props.user.token);
  }

  listTopics() {
    const topics = [...this.props.topics.topicList];
    // .sort((a,b) => a.name > b.name ? 1 : -1);
    if(this.state.sorted) {
      topics.sort((a,b) => a.name > b.name ? 1 : -1);
    } 
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
  
  sortTopics = () => {
    this.setState({
      sorted: true
    })
  }

  showTopicsWhenLoaded() {
    const topics = this.props.topics.topicList;
    if(topics) {
      return (
        <div className="container">
          <h1><u>Topics:</u></h1>
          {this.listTopics()}
          {this.adminButtons()}
          <button onClick={this.sortTopics}>Sort Topics</button>
        </div>
      )
    }
  }
  
  adminButtons = () => {
    if (this.props.user.admin) {
      return (
        <Link to="/topics/new"><button className="btn btn-lg border">Create a New Topic</button></Link>
      )
    }
  }

  render() {
    console.log(this.props.topics.topicList);
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
