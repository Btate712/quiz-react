import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../actions/questionActions';
import { URL } from '../appData/applicationConstants';
import { Redirect } from 'react-router-dom';
import Question from './question';

class NewQuestionForm extends Component {
  state = {
    topic_id: this.props.topic.id,
    stem: " ",
    choice_1: " ",
    choice_2: " ",
    choice_3: " ",
    choice_4: " ",
    correct_choice: "1",
    complete: false
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const question = this.state;
    this.props.createQuestion(question, this.props.user.token);
    this.setState({ complete: true })

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

  redirectWhenComplete = () => {
    if (this.state.complete === true) {
      return (<Redirect to={`/topics/${this.props.topic.id}`} />)
    }
  }

  render() {
    return (
      <div className={`${this.state.complete}`}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Topic: </label>
            <select name="topic_id" onChange={this.handleInputChange} value={this.state.topic_id} >
              {this.topicOptions()}
            </select>
          </div>
          <div className="form-group">
            <label>Question Stem:</label>
            <textarea name="stem" id="stem" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.stem} />
          </div>
          <div className="form-group">
            <label>Choice 1:</label>
            <input name="choice_1" id="choice1" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice_1} />
          </div>
          <div className="form-group">
            <label>Choice 2:</label>
            <input name="choice_2" id="choice2" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice_2} />
          </div>
          <div className="form-group">
            <label>Choice 3:</label>
            <input name="choice_3" id="choice3" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice_3} />
          </div>
          <div className="form-group">
            <label>Choice 4:</label>
            <input name="choice_4" id="choice4" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.choice_4} />
          </div>
          <div className="form-group">
            <label>Correct Choice: </label>
            <select name="correct_choice" onChange={this.handleInputChange} value={this.state.correct_choice} >
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
            </select>
          </div>
          <input type="submit" className="btn btn-primary"/>
        </form>
        <h1>Question Preview:</h1>
        <Question question={this.state} />
        {this.redirectWhenComplete()}
      </div>
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