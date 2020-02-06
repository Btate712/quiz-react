import React, { isValidElement } from 'react';
import { connect } from 'react-redux';
import { storeQuestionResponse } from '../actions/quizActions';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    questionAnsweredCorrectly: false,
    selection: ""
  }
  
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleSelection);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleSelection);
  }

  getSelection(event) {
    if(event.type === "keydown") {
      switch(event.key) {
        case "a":
          return 1
        case "b":
          return 2
        case "c":
          return 3
        case "d": 
          return 4
        case "1":
          return 1
        case "2":
          return 2
        case "3":
          return 3
        case "4":
          return 4
        default:
          return "invalid selection"
      }
    } else {
      return parseInt(event.target.id);
    }
  }

  isValidSelection(selection) {
    console.log(selection);
    return selection === "invalid selection" ? false : true;
  }

  handleSelection = (event) => {
    if(this.state.questionAnswered === false)
    {
      const selection = this.getSelection(event);
      console.log(this.isValidSelection(selection));
      if (this.isValidSelection(selection) === true) {
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
      console.log(this.state);
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
          <>
            { setTimeout(() => this.storeResult(), 1000) }
            <h1>Correct!</h1>
          </>
        )
      } else {
        return (
          <>
            { setTimeout(() => this.storeResult(), 4000) }
            <h1>Incorrect. The correct answer is {this.numberToLetter(this.props.question.correct_choice)}</h1>
          </>
        )
      }
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

const mapStateToProps = state => {
  return({
    quiz: state.quiz
  })
}

const mapDispatchToProps = dispatch => {
  return({
    storeQuestionResponse: (question, choice) => dispatch(storeQuestionResponse(question, choice))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybleQuestion);