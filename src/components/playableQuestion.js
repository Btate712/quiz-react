import React from 'react';
import { getSelection } from '../actions/quizActions';
import { numberToLetter } from '../actions/questionActions';

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
    const question = this.props.question;
    return (
      <div className="Question container" >
        <h3>Question Id: {question.id}</h3>
        <h1 dangerouslySetInnerHTML={{__html: question.stem}} />
        <br />
        <h1 id="1" className="ml-5 playable-question-choice" onClick={this.handleSelection}
          dangerouslySetInnerHTML={{__html: `A. ${question.choice_1}`}} />
        <h1 id="2" className="ml-5 playable-question-choice" onClick={this.handleSelection}
          dangerouslySetInnerHTML={{__html: `B. ${question.choice_2}`}} />
        <h1 id="3" className="ml-5 playable-question-choice" onClick={this.handleSelection}
          dangerouslySetInnerHTML={{__html: `C. ${question.choice_3}`}} />
        <h1 id="4" className="ml-5 playable-question-choice" onClick={this.handleSelection}
          dangerouslySetInnerHTML={{__html: `D. ${question.choice_4}`}} />
        <br />
        {this.showGradedQuestion()}        
        
      </div>
    )
  }
}

export default PlaybleQuestion;