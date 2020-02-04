import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion } from '../actions/questionActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link, Switch, Route } from 'react-router-dom';
import NewQuestionForm from '../components/newQuestionForm';

class QuestionContainer extends Component {

  componentDidMount() {
    this.props.getQuestion(URL, this.props.questionId, this.props.user.token);
  }

  adminButtons() {
    if(this.props.user.admin === true) {
      return (
        <>
          <Link to={`/questions/${this.props.question.id}/edit`}>
            <button className="btn btn-lg border">
              Edit Question
            </button>
          </Link>
           <button className="btn btn-lg border pull-right">
               Delete Question
           </button>
        </>
      )
    }
  }

  showQuestionWhenLoaded() {
    const question = this.props.question.question;
    if(question) {
      return (
        <Switch>
          <Route path="/questions/:id/edit">
          <NewQuestionForm mode="edit" />
          </Route>
          <Route path="/questions/:id">
            <Question topic={this.props.topic.topic_info} question={question} />
            <div className="container">
              <Link to={`/topics/${this.props.topic.topic_info.id}`}>
                <button className="btn btn-lg border">
                  Back to topic: {this.props.topic.topic_info.name}
                </button>
              </Link>
              {this.adminButtons()}
            </div>
          </Route>
        </Switch>
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