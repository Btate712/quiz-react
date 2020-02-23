import React from 'react';
import { getSelection } from '../actions/quizActions';
import { PlayableQuestionDisplay } from './playableQuestionDisplay';
import Comments from './comments';
import NewCommentForm from './newCommentForm';
import { connect } from 'react-redux';
import { URL } from '../appData/applicationConstants';
import { createComment } from '../actions/commentActions';

class PlaybleQuestion extends React.Component {
  state = {
    questionAnswered: false,
    selection: "",
    showComments: false,
    showNewCommentForm: false
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

  toggleNewCommentForm = () => {
    this.setState({
      showNewCommentForm: !this.state.showNewCommentForm
    })
  }

  createComment = comment => {
    createComment(URL, comment, this.props.user.token);
    this.setState({showNewCommentForm: false})
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
        <NewCommentForm 
          user={this.props.user}
          questionId={this.props.question.id}
          createComment={this.createComment}
          show={this.state.showNewCommentForm}
        />
        <Comments 
          comments={this.props.comments}
          show={this.state.showComments}
        />
        <div className="containter">
          <br />
          <button onClick={this.toggleNewCommentForm} className="btn btn-primary mr-1">
            {this.state.showNewCommentForm ? "Hide New Comment Form" : "Show New Comment Form"}
          </button>
          <button onClick={this.toggleComments} className="btn btn-primary">
            {this.state.showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

export default connect(mapStateToProps)(PlaybleQuestion);