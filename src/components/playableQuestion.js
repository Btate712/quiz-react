import React from 'react';
import { getSelection } from '../actions/quizActions';
import { PlayableQuestionDisplay } from './playableQuestionDisplay';
import CommentsContainer from '../containers/commentsContainer';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import { createComment, deleteComment } from '../actions/commentActions';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    selection: "",
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

  render() {
    return (
      <>
        <h1>Question #{this.props.questionNumber} of {this.props.quizLength}:</h1>
        <PlayableQuestionDisplay
          question={this.props.question} 
          handleSelection={this.handleSelection}
          questionAnswered={this.state.questionAnswered}
          selection={this.state.selection}
          storeResult={this.storeResult}
        />
        <br />
        <CommentsContainer 
          comments={this.props.comments}
          questionId={this.props.question.id}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createComment: (comment, token) => dispatch(createComment(URL, comment, token)),
    deleteComment: (commentId, token) => dispatch(deleteComment(URL, commentId, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybleQuestion);