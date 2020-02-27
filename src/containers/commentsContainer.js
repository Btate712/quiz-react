import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/commentActions';
import Comments from '../components/comments';
import NewCommentForm from '../components/newCommentForm';
import { createComment } from '../actions/commentActions';
import { URL } from '../appData/applicationConstants';

class commentsContainer extends Component {
  state = {
    showComments: false,
    showNewCommentForm: false
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

  showNewCommentForm = event => {
    event.preventDefault();
    this.setState({ showNewCommentForm: !this.state.showNewCommentForm })
  }

  createComment = comment => {
    this.props.createComment(comment, this.props.user.token);
    this.setState({showNewCommentForm: false})
  }
  
  render() {
    return (
      <>
        <NewCommentForm 
          show={this.state.showNewCommentForm}
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
        <button className="btn btn-primary pull-right mr-1" onClick={this.showNewCommentForm}>
          { this.state.showNewCommentForm ? "Hide New Comment Form" : "Show New Comment Form" }
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