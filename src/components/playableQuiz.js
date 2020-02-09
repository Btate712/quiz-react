import React from 'react';
import PlayableQuestion from './playableQuestion';
import { QuizSummary } from './quizSummary';
import ConditionalRedirect from './conditionalRedirect';

class PlayableQuiz extends React.Component {
  state = {
    complete: false
  }

  askQuestionOrGiveSummary = () => {
    if(this.props.quiz.currentQuestion <= this.props.quiz.questions.length - 1) {
      return(
        <>
          <h1>Question #{this.props.quiz.currentQuestion + 1}:</h1>
          <PlayableQuestion 
            question={this.props.quiz.questions[this.props.quiz.currentQuestion]} 
            storeQuestionResponse={this.props.storeQuestionResponse}
          />
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

  render() {
    return (
      <div className="container" complete={this.state.complete.toString()}>
        {this.askQuestionOrGiveSummary()}
        <ConditionalRedirect to="/home" condition={this.state.complete} />
      </div>
    );
  }
}

export default PlayableQuiz;