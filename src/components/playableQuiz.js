import React from 'react';
import PlayableQuestion from './playableQuestion';
import { QuizSummary } from './quizSummary';
import ConditionalRedirect from './conditionalRedirect';

class PlayableQuiz extends React.Component {
  state = {
    complete: false
  }

  askQuestionOrGiveSummary = () => {
    
  }

  storeResults = () => {
    this.props.storeQuizResults(this.props.quiz.questions, this.props.user.token);
    this.setState({ complete: true })
  }

  render() {
    let questionOrSummary = null;
    if(this.props.quiz.currentQuestion <= this.props.quiz.questions.length - 1) {
      questionOrSummary = (
        <>
          <h1>Question #{this.props.quiz.currentQuestion + 1} of {this.props.quiz.questions.length}:</h1>
          <PlayableQuestion 
            question={this.props.quiz.questions[this.props.quiz.currentQuestion].question} 
            storeQuestionResponse={this.props.storeQuestionResponse}
          />
        </>
      )
    } else {
      questionOrSummary = (
        <>
          <QuizSummary quiz={this.props.quiz} storeResults={this.storeResults} />
          <br />
          <br />
        </>
      )
    }

    return (
      <div className="container" >
        {questionOrSummary}
        <button className="btn btn-primary pull-right" onClick={this.props.resetQuiz}>Reset Quiz</button>
        <ConditionalRedirect to="/home" condition={this.state.complete} />
      </div>
    );
  }
}

export default PlayableQuiz;