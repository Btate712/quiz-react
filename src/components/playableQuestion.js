import React from 'react';
import { connect } from 'react-redux';
import storeQuestionResponse from '../actions/storeQuestionResponse';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    questionAnsweredCorrectly: false,
    selection: ""
  }
  
  handleSelection = (event) => {
    if(this.state.questionAnswered === false)
    {
      const selection = parseInt(event.target.id);
      this.setState({
        questionAnswered: true,
        selection: parseInt(event.target.id) 
      })
      if (selection === this.props.question.correct_choice) {
        this.setState({
          questionAnsweredCorrectly: true 
        })
      }
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

  showGradedQuestion = () => {
    if(this.state.questionAnswered) {
      if(this.state.questionAnsweredCorrectly) {
        return (
          <h1>Correct!</h1>
        )
      } else {
        return (
          <h1>Incorrect. The correct answer is {this.numberToLetter(this.props.question.correct_choice)}</h1>
        )
      }
    }
    {setTimeout(() => this.storeResult(), 3000)}
  }

  storeResult = () => {
    console.log("in storeResult - state: ", this.state);
    if(this.state.questionAnswered) {
      this.props.storeQuestionResponse(this.props.question, parseInt(this.state.selection));
      console.log(this.state)
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
      <div className="Question">
        <h1>{question.stem}</h1>
        <br />
        <h1 id="1" className="ml-5 question-choice" onClick={this.handleSelection}>A. {question.choice_1}</h1>
        <h1 id="2" className="ml-5 question-choice" onClick={this.handleSelection}>B. {question.choice_2}</h1>
        <h1 id="3" className="ml-5 question-choice" onClick={this.handleSelection}>C. {question.choice_3}</h1>
        <h1 id="4" className="ml-5 question-choice" onClick={this.handleSelection}>D. {question.choice_4}</h1>
        <br />
        {this.showGradedQuestion()}        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    quiz: state.quiz
  })
}

const mapDispatchToProps = dispatch => {
  return({
    storeQuestionResponse: (question, response) => dispatch(storeQuestionResponse(question, response))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybleQuestion);