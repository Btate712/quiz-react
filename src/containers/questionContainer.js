import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion } from '../actions/questionActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link } from 'react-router-dom';

class QuestionContainer extends Component {

  componentDidMount() {
    this.props.getQuestion(URL, this.props.questionId, this.props.user.token);
  }

  showQuestionWhenLoaded() {
    const question = this.props.question.question;
    if(question) {
      return (
        <>
          <Question topic={this.props.topic.topic_info} question={question} />
          <div className="container">
            <Link to={`/topics/${this.props.topic.topic_info.id}`}>
              <button className="btn btn-lg border">
                Back to topic: {this.props.topic.topic_info.name}
              </button>
            </Link>
          </div>
        </>
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