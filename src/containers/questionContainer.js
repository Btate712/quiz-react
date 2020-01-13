import React, { Component } from 'react';
import URL from '../appData/applicationConstants';
import getQuestion from '../actions/getQuestion';
import { connect } from 'react-redux';
import Question from '../components/question';

class QuestionContainer extends Component {

  componentDidMount() {
    this.props.getQuestion(URL, this.props.questionId);
  }

  showQuestionWhenLoaded() {
    const question = this.props.question.question;
    if(question) {
      return (
        <Question question={question} />
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
    question: state.question.question
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getQuestion: (url, questionId) => dispatch(getQuestion(url, questionId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);