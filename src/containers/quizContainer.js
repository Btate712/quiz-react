import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewQuizContainer from './newQuizContainer';
import { connect } from 'react-redux';
import getTopics from '../actions/getTopics';
import URL from '../appData/applicationConstants';


class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(URL);
  }

  renderWhenLoaded() {
    if(this.props.topics.length > 0) {
      return(
        <div>
          <h1>Quiz Container</h1>
          <Switch>
            <Route path="/quiz/new"><NewQuizContainer topics={this.props.topics} /></Route>
          </Switch>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props.topics)}
        {console.log(this.props.topics.length)}
        {this.renderWhenLoaded()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getTopics: (url) => dispatch(getTopics(url))
  });
}

const mapStateToProps = state => {
  return ({
    topics: state.topics.topicList
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);