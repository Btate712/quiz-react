import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion } from '../actions/questionActions';
import { connect } from 'react-redux';
import Question from '../components/question';

class QuestionContainer extends Component {

  componentDidMount() {
    this.props.getQuestion(URL, this.props.questionId, this.props.user.token);
  }

  showQuestionWhenLoaded() {
    const question = this.props.question.question;
    if(question) {
      return (
        <Question topic={this.props.topic.topic_info} question={question} />
      )
    }
  }

  render() {
    return (
      <div>
        {this.showQuestionWhenLoaded()}
      </div>  
    );
  }
}

const mapStateToProps = state => {
  return({
    question: state.question.question,
    user: state.user,
    topic: state.topic.topic
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getQuestion: (url, questionId, token) => dispatch(getQuestion(url, questionId, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);