import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion, deleteQuestion } from '../actions/questionActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import NewQuestionForm from '../components/newQuestionForm';

class QuestionContainer extends Component {
  state = {
    questionDeleted: false
  }

  componentDidMount() {
    this.props.getQuestion(this.props.questionId, this.props.user.token);
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
            <button className="btn btn-lg border pull-right" onClick={() => this.deleteQuestion()} >
              Delete Question
           </button>
        </>
      )
    }
  }

  deleteQuestion = () => {
    const confirmation = window.confirm("Delete this question?");
    if (confirmation === true) {
      this.props.deleteQuestion(this.props.questionId, this.props.user.token);
      this.setState({
        questionDeleted: true
      })
    }
  }

  redirectOnDelete = () => {
    if (this.state.questionDeleted === true) {
      this.setState({
        questionDeleted: false
      })
      return (
        <Redirect to={`/topics/${this.props.topic.topic_info.id}`} />
      )
    }
  }

  topicButtonIfLoaded = () => {
    if ( this.props.topic !== {} ) {
      return (
        <Link to={`/topics/${this.props.topic.topic_info.id}`}>
          <button className="btn btn-lg border">
            Back to topic: {this.props.topic.topic_info.name}
          </button>
        </Link>
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
            <div className={this.state.questionDeleted.toString()} >
              {this.redirectOnDelete()}
            </div>
            <Question topic={this.props.topic.topic_info} question={question} />
            <div className="container">
              {this.topicButtonIfLoaded()}
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
    getQuestion: (questionId, token) => dispatch(getQuestion(URL, questionId, token)),
    deleteQuestion: (questionId, token) => dispatch(deleteQuestion(URL, questionId, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);