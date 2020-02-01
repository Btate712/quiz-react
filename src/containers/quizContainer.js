import React from 'react';
import NewQuizForm from '../components/newQuizForm';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topicActions';
import { URL } from '../appData/applicationConstants';
import { createQuiz } from '../actions/quizActions';
import PlayableQuiz from '../components/playableQuiz';


class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics(this.props.user.token);
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
          <NewQuizForm createQuiz={this.props.createQuiz} token={this.props.user.token} topics={this.props.topics} />
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
    getTopics: (token) => dispatch(getTopics(URL, token)),
    createQuiz: (numberOfQuestions, topics, token) => dispatch(createQuiz(URL, numberOfQuestions, topics, token))
  });
}

const mapStateToProps = state => {
  return ({
    topics: state.topics.topicList,
    quiz: state.quiz,
    user: state.user
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);