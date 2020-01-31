import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';
import Question from './question';
import { storeQuizResults } from '../actions/quizActions';
import URL from '../appData/applicationConstants';


class PlayableQuiz extends React.Component {
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
          <button className="btn btn-lg border" onClick={() => this.props.storeQuizResults(this.props.quiz.questions)}>Done - Store Results</button>
        </>
      )
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

  showSummary = () => {
    const output = this.props.quiz.questions.map((question, index) => {
      return(
        <div key={index}>
          <h1>Question #{index + 1}: </h1>
          <Question question={question} />
          <h2>You answered: {this.numberToLetter(question.choice)}</h2>
          <hr />
        </div>
      )
    })
    return(
      <>
        {output}
      </>
    )
  }

  render() {
    return (
      <div>
        {this.askQuestionOrGiveSummary()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quiz: state.quiz
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    storeQuizResults: questions => dispatch(storeQuizResults(URL, questions))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayableQuiz);