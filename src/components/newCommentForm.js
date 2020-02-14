import React from 'react';

class NewCommentForm extends React.Component {
  state = {
    commentText: "",
    commentType: "explanation",
  }

  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      userName: this.props.user.name,
      questionId: this.props.questionId,
      text: this.state.commentText,
      resolved: true,
      commentType: this.state.commentType
    }
    this.props.createComment(newComment);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  content = (
    <>
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="text">Question {this.state.commentType}: </label><br />
        <textarea onChange={this.handleChange} value={this.state.text} name="commentText" rows="5" cols="80"/>
        <br />
        <button className="btn btn-large border" type="submit">Save Comment</button>
      </form>
      <h1>{this.state.text}</h1>
    </>
  )
  
  render() {
    return (
      <>
        { this.props.show === true ? this.content : "" }
      </>
    );
  }
}

export default NewCommentForm;