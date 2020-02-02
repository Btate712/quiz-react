import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../actions/questionActions';
import { URL } from '../appData/applicationConstants';

class NewQuestionForm extends Component {
  state = {
    topicId: this.props.topic.id,
    stem: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    correctChoice: 1
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const question = this.state
    this.props.createQuestion(question, this.props.user.token)
  }

  topicOptions = () => {
    return(
      this.props.topics.map(topic => {
        return(
          <option key={topic.id} value={topic.id}>{topic.name}</option>
        )
      })
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Topic: </label>
          <select name="topicId" onChange={this.handleInputChange} value={this.state.topicId} >
            {this.topicOptions()}
          </select>
        </div>
        <div className="form-group">
          <label>Question Stem:</label>
          <input name="stem" id="stem" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.stem} />
        </div>
        <div className="form-group">
          <label>Choice 1:</label>
          <input name="choice1" id="choice1" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice1} />
        </div>
        <div className="form-group">
          <label>Choice 2:</label>
          <input name="choice2" id="choice2" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice2} />
        </div>
        <div className="form-group">
          <label>Choice 3:</label>
          <input name="choice3" id="choice3" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice3} />
        </div>
        <div className="form-group">
          <label>Choice 4:</label>
          <input name="choice4" id="choice4" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice4} />
        </div>
        <div className="form-group">
          <label>Correct Choice: </label>
          <select name="correctChoice" onChange={this.handleInputChange} value={this.state.correctChoice} >
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">D</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary"/>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return({
    user: state.user,
    topics: state.topics.topicList,
    topic: state.topic.topic.topic_info
  })
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question, token) => dispatch(createQuestion(URL, question, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionForm);