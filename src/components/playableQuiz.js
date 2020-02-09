import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';
import { QuizSummary } from './quizSummary';
import { storeQuizResults } from '../actions/quizActions';
import { URL } from '../appData/applicationConstants';
import { Redirect } from 'react-router-dom';


class PlayableQuiz extends React.Component {
  state = {
    complete: false
  }

  askQuestionOrGiveSummary = () => {
    if(this.props.quiz.currentQuestion <= this.props.quiz.questions.length - 1) {
      return(
        <>
          <h1>Question #{this.props.quiz.currentQuestion + 1}:</h1>
          <PlayableQuestion question={this.props.quiz.questions[this.props.quiz.currentQuestion]} />
        </>
      )
    } else {
      return (
        <>
          <QuizSummary quiz={this.props.quiz} storeResults={this.storeResults} />
          <br />
          <br />
        </>
      )
    }
  }

  storeResults = () => {
    this.props.storeQuizResults(this.props.quiz.questions, this.props.user.token);
    this.setState({ complete: true })
  }

  redirectWhenComplete = () => {
    if (this.state.complete === true) {
      return <Redirect to="/home" />
    }
  }

  render() {
    return (
      <div className="container" complete={this.state.complete.toString()}>
        {this.askQuestionOrGiveSummary()}
        {this.redirectWhenComplete()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quiz: state.quiz,
    user: state.user
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    storeQuizResults: (questions, token) => dispatch(storeQuizResults(URL, questions, token))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayableQuiz);