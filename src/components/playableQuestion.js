import React from 'react';
import { getSelection } from '../actions/quizActions';
import { numberToLetter } from '../actions/questionActions';
import PlayableQuestionDisplay from './playableQuestionDisplay';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    questionAnsweredCorrectly: false,
    selection: ""
  }
  
  componentDidMount = () => {
    document.addEventListener("keydown", this.keyEventResponse);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.keyEventResponse);
  }

  handleSelection = (event) => {
    if(this.state.questionAnswered === false)
    {
      const selection = getSelection(event);
      if (selection !== "invalid selection") {
        this.setState({
          questionAnswered: true,
          selection: selection 
        })
        if (selection === this.props.question.correct_choice) {
          this.setState({
            questionAnsweredCorrectly: true 
          })
        }
      }
    }
  }

  keyEventResponse = event => {
    if (this.state.questionAnswered === false) {
      this.handleSelection(event);
    } else {
      if (event.key === "Enter" || event.key === "ArrowRight") {
        this.storeResult();
      }
    }
  }

  showGradedQuestion = () => {
    if(this.state.questionAnswered) {
      const correct = this.state.questionAnsweredCorrectly;
      const message = correct === true ? "Correct!" : `Incorrect. The correct answer is ${numberToLetter(this.props.question.correct_choice)}`
      return (
        <>
          <h1>{message}</h1>
          <button className="btn btn-primary" onClick={this.storeResult} >Next Question</button>
        </>
      )
    }
  }

  storeResult = () => {
    if(this.state.questionAnswered) {
      this.props.storeQuestionResponse(this.props.question, parseInt(this.state.selection));
      this.setState({
        questionAnswered: false,
        questionAnsweredCorrectly: false,
        selection: ""
      })
    }
  }

  render() {
    return (
      <PlayableQuestionDisplay
        question={this.props.question} 
        handleSelection={this.handleSelection}
        showGradedQuestion={this.showGradedQuestion}
      />
    )
  }
}

export default PlaybleQuestion;