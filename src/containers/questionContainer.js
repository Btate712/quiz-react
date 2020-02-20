import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion, deleteQuestion } from '../actions/questionActions';
import { getComments, createComment, deleteComment } from '../actions/commentActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link, Switch, Route } from 'react-router-dom';
import NewQuestionContainer from '../containers/newQuestionContainer';
import Comments from '../components/comments';
import ConditionalRedirect from '../components/conditionalRedirect';
import QuestionAdminButtons from '../components/questionAdminButtons';
import NewCommentForm from '../components/newCommentForm';

class QuestionContainer extends Component {
  state = {
    questionDeleted: false,
    showComments: false,
  }

  componentDidMount() {
    this.props.getQuestion(this.props.questionId, this.props.user.token);
    // this.props.getComments(this.props.questionId, this.props.user.token);
  }

  deleteQuestion = () => {
    const confirmation = window.confirm("Delete this question?");
    if (confirmation === true) {
      this.props.deleteQuestion(this.props.questionId, this.props.user.token);
      this.setState({
        questionDeleted: true
      })
    }
  }

  topicButtonIfLoaded = () => {
    if ( this.props.topic.topic_info) {
      return (
        <Link to={`/topics/${this.props.topic.topic_info.id}`}>
          <button className="btn btn-lg border">
            Back to topic: {this.props.topic.topic_info.name}
          </button>
        </Link>
      )
    } else {
      return (
        <Link to="/questions">
          <button className="btn btn-lg border">
            Back to Questions
          </button>
        </Link>
      )
    }
  }

  showComments = event => {
    event.preventDefault();
    this.setState({ showComments: this.state.showComments === true ? false : true });
  }

  showNewCommentForm = event => {
    event.preventDefault();
    this.setState({ showNewCommentForm: true })
  }

  createComment = comment => {
    createComment(URL, comment, this.props.user.token);
    this.setState({showNewCommentForm: false})
  }

  deleteComment = commentId => {
    deleteComment(URL, commentId, this.props.user.token);
  }

  dontAsk = comments => {
    if(comments.length > 0) {
      let blacklisted = false;
      const userComments = comments.filter(comment => comment.user_name.name === this.props.user.name);
      if(userComments.length > 0) {
        userComments.forEach(comment => {
          if(comment.comment.comment_type === "stop-asking") {
            blacklisted = true;
          }
        })
      }
      return blacklisted;
    }
  } 

  showQuestionWhenLoaded() {
    const question = this.props.question;
    if(question) {
      return (
        <Switch>
          <Route path="/questions/:id/edit">
          <NewQuestionContainer mode="edit" question={question.question} />
          </Route>
          <Route path="/questions/:id">
            <Question topic={this.props.topic.topic_info} question={question.question} dontAsk={this.dontAsk(this.props.question.comments)} />
            <div className="container">
              <NewCommentForm 
                user={this.props.user}
                questionId={this.props.questionId}
                createComment={this.createComment}
              />
              <Comments 
                show={this.state.showComments} 
                comments={question.comments} 
                deleteComment={this.deleteComment}
              />
              <button className="btn btn-lg border" onClick={this.showComments}>
                { this.state.showComments === true ? "Hide Comments" : "Show Comments" }
              </button>
              {this.topicButtonIfLoaded()}
              <QuestionAdminButtons 
                userIsAdmin={this.props.user.admin} 
                topicId={this.props.topic.id}
                deleteQuestion={this.deleteQuestion}
                showNewCommentForm={this.showNewCommentForm}
              />
            </div>
          </Route>
        </Switch>
      )
    }
  }

  render() {
    return (
      <>
        <ConditionalRedirect 
          to={this.props.topic.topic_info ? `/topics/${this.props.topic.topic_info.id}` : "/questions"} 
          condition={this.state.questionDeleted} 
        />
        {this.showQuestionWhenLoaded()}
      </>  
    );
  }
}

const mapStateToProps = state => {
  return({
    question: state.question,
    user: state.user,
    topic: state.topic.topic
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getQuestion: (questionId, token) => dispatch(getQuestion(URL, questionId, token)),
    deleteQuestion: (questionId, token) => dispatch(deleteQuestion(URL, questionId, token)),
    getComments: (questionId, token) => dispatch(getComments(URL, questionId, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);