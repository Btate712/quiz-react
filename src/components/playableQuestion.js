import React from 'react';
import { getSelection } from '../actions/quizActions';
import { PlayableQuestionDisplay } from './playableQuestionDisplay';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
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

  storeResult = () => {
    if(this.state.questionAnswered) {
      this.props.storeQuestionResponse(this.props.question, parseInt(this.state.selection));
      this.setState({
        questionAnswered: false,
        selection: ""
      })
    }
  }

  render() {
    return (
      <PlayableQuestionDisplay
        question={this.props.question} 
        handleSelection={this.handleSelection}
        questionAnswered={this.state.questionAnswered}
        selection={this.state.selection}
        storeResult={this.storeResult}
      />
    )
  }
}

export default PlaybleQuestion;