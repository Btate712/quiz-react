import React from 'react';
import NewQuizForm from '../components/newQuizForm';
import { connect } from 'react-redux';
import getTopics from '../actions/getTopics';
import URL from '../appData/applicationConstants';
import createQuiz from '../actions/createQuiz';
import PlayableQuiz from '../components/playableQuiz';


class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(URL);
  }

  renderWhenLoaded() {
    if(this.props.quiz.questions.length > 0) {
      return (
        <div>
          <PlayableQuiz />
        </div>
      )
    } else if(this.props.topics && this.props.topics.length > 0) {
      return(
        <div>
          <NewQuizForm createQuiz={this.props.createQuiz} topics={this.props.topics} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderWhenLoaded()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getTopics: (url) => dispatch(getTopics(url)),
    createQuiz: (numberOfQuestions, topics) => dispatch(createQuiz(URL, numberOfQuestions, topics))
  });
}

const mapStateToProps = state => {
  return ({
    topics: state.topics.topicList,
    quiz: state.quiz
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);