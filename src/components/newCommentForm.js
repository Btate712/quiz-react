import React from 'react';

class NewCommentForm extends React.Component {
  state = {
    commentType: "stop-asking",
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      userName: this.props.user.name,
      questionId: this.props.questionId,
      text: this.state.commentText,
      resolved: this.state.commentType === "problem" ? false : true,
      commentType: this.state.commentType
    }
    this.props.createComment(newComment);
  }

  handleChange = event => {
    if(event.target.name === "commentType" && event.target.value === "stop-asking") {
      this.setState({ text: "" })
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  adminOption = () => {
    if(this.props.user.admin === true) {
      return (<option value="explanation">Explanation</option>)
    }
  }

  commentTextIfRequired = () => {
    if(this.state.commentType === "problem") {
      return (
        <>
          <label>
            Comment:<br />
            <textarea name="text" value={this.state.text} onChange={this.handleChange} cols="100" rows="5"/>
          </label>
          <br />
        </>
      );
    } else {
      return (<></>);
    }
  }
  
  render() {
    return (
      <>
        <hr />
        <form onSubmit={this.handleSubmit} >
          <h1>Add a comment:</h1>
          <label>
            Comment Type:
            <select name="commentType" value={this.state.commentType} onChange={this.handleChange}>
              <option value="problem">Problem With Question</option>
              <option value="stop-asking">Stop Asking Me This Question</option>
              {this.adminOption()}
            </select>
          </label>
          <br />
          {this.commentTextIfRequired()}
          <button className="btn btn-large border" type="submit">Save Comment</button>
        </form>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default NewCommentForm;