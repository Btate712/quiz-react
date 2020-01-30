import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';


class PlayableQuiz extends React.Component {
  askQuestionOrGiveSummary = () => {
    console.log("current question: ", this.props.quiz.currentQuestion);
    if(this.props.quiz.currentQuestion <= this.props.quiz.questions.length - 1) {
      return(
        <div>
          <h1>Question #{this.props.quiz.currentQuestion + 1}:</h1>
          <PlayableQuestion question={this.props.quiz.questions[this.props.quiz.currentQuestion]} />
        </div>
      )
    } else {
      return (
        <h1>
          Quiz Complete!
        </h1>
      )
    }
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