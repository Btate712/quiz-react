import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/commentActions';
import Comments from '../components/comments';
import CommentForm from '../components/commentForm';
import { createComment } from '../actions/commentActions';
import { URL } from '../appData/applicationConstants';

class commentsContainer extends Component {
  state = {
    showComments: false,
    showCommentForm: false
  }

  componentWillReceiveProps = () => {
    this.setState({ showComments: false })
  }

  deleteComment = commentId => {
    this.props.deleteComment(commentId, this.props.user.token);
  }

  showComments = event => {
    event.preventDefault();
    this.setState({ showComments: this.state.showComments ? false : true });
  }

  showCommentForm = event => {
    event.preventDefault();
    this.setState({ showCommentForm: !this.state.showCommentForm })
  }

  createComment = comment => {
    this.props.createComment(comment, this.props.user.token);
    this.setState({showCommentForm: false})
  }
  
  render() {
    return (
      <>
        <CommentForm 
          show={this.state.showCommentForm}
          user={this.props.user}
          questionId={this.props.questionId}
          createComment={this.createComment}
        />
        <Comments 
          user={this.props.user}
          show={this.state.showComments} 
          comments={this.props.comments} 
          deleteComment={this.deleteComment}
        />
        <button className="btn btn-primary pull-right" onClick={this.showComments}>
          { this.state.showComments ? "Hide Comments" : "Show Comments" }
        </button>
        <button className="btn btn-primary pull-right mr-1" onClick={this.showCommentForm}>
          { this.state.showCommentForm ? "Hide New Comment Form" : "Show New Comment Form" }
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    deleteComment: (commentId, token) => dispatch(deleteComment(URL, commentId, token)),
    createComment: (comment, token) => dispatch(createComment(URL, comment, token))
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(commentsContainer);