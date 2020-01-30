import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';
import Question from './question';


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
        <>
          <h1>Question #{index + 1}</h1>
          <Question question={question} />
          <h2>You answered: {this.numberToLetter(question.response)}</h2>
          <hr />
        </>
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
  })
}

export default connect(mapStateToProps)(PlayableQuiz);