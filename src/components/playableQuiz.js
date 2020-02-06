import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';
import Question from './question';
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
          {this.showSummary()}
          <button className="btn btn-lg border" onClick={() => this.storeResults()}>Done - Store Results</button>
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

  numberToLetter(number) {
    switch (number) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        return "Not Found"
    }  
  }

  getScore = () => {
    let numberRight = 0;
    const questions = this.props.quiz.questions;
    const outOf = questions.length;
    questions.forEach(question => {
      if (question.choice === question.correct_choice) {
        numberRight += 1;
      }
    })
    return {numberRight: numberRight, outOf: outOf}
  }

  showSummary = () => {
    const score = this.getScore();
    const output = this.props.quiz.questions.map((question, index) => {
      return(
        <div key={index}>
          <h3>Question Id: {question.id}</h3>
          <h1>Question #{index + 1}: </h1>
          <Question question={question} />
          <div className="container">
            <h2 className={question.choice === question.correct_choice ? "correct" : "incorrect"}>
              You answered: {this.numberToLetter(question.choice)}
            </h2>
          </div>
          <hr />
        </div>
      )
    })
    return(
      <>
        <h1>{score.numberRight} out of {score.outOf} correct:  {(score.numberRight * 100 / score.outOf).toFixed(2)}%.</h1>
        <button className="btn btn-lg border" onClick={() => this.storeResults()}>Done - Store Results</button>
        <hr />
        {output}
      </>
    )
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