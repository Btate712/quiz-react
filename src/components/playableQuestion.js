import React from 'react';
import { getSelection } from '../actions/quizActions';
import { PlayableQuestionDisplay } from './playableQuestionDisplay';
import Comments from './comments';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    selection: "",
    showComments: false
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
        selection: "",
        showComments: false
      })
    }
  }

  toggleComments = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  render() {
    return (
      <>
        <PlayableQuestionDisplay
          question={this.props.question} 
          handleSelection={this.handleSelection}
          questionAnswered={this.state.questionAnswered}
          selection={this.state.selection}
          storeResult={this.storeResult}
        />
        <Comments 
          comments={this.props.comments}
          show={this.state.showComments}
        />
        <div className="containter">
          <br />
          <button onClick={this.toggleComments} className="btn btn-primary">
            {this.state.showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>
      </>
    )
  }
}

export default PlaybleQuestion;