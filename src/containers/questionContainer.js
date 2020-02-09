import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion, deleteQuestion } from '../actions/questionActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link, Switch, Route } from 'react-router-dom';
import NewQuestionContainer from '../containers/newQuestionContainer';
import ConditionalRedirect from '../components/conditionalRedirect';
import QuestionAdminButtons from '../components/questionAdminButtons';

class QuestionContainer extends Component {
  state = {
    questionDeleted: false
  }

  componentDidMount() {
    this.props.getQuestion(this.props.questionId, this.props.user.token);
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

  topicButtonIfLoaded = () => {
    if ( this.props.topic.topic_info) {
      return (
        <Link to={`/topics/${this.props.topic.topic_info.id}`}>
          <button className="btn btn-lg border">
            Back to topic: {this.props.topic.topic_info.name}
          </button>
        </Link>
      )
    } else {
      return (
        <Link to="/questions">
          <button className="btn btn-lg border">
            Back to Questions
          </button>
        </Link>
      )
    }
  }

  showQuestionWhenLoaded() {
    console.log(this.props)
    const question = this.props.question;
    if(question) {
      return (
        <Switch>
          <Route path="/questions/:id/edit">
          <NewQuestionContainer mode="edit" question={question} />
          </Route>
          <Route path="/questions/:id">
            <Question topic={this.props.topic.topic_info} question={question} />
            <div className="container">
              {this.topicButtonIfLoaded()}
              <QuestionAdminButtons 
                userIsAdmin={this.props.user.admin} 
                topicId={this.props.topic.id}
                deleteQuestion={this.deleteQuestion}
              />
            </div>
          </Route>
        </Switch>
      )
    }
  }

  render() {
    return (
      <>
        <ConditionalRedirect 
          to={this.props.topic.topic_info ? `/topics/${this.props.topic.topic_info.id}` : "/questions"} 
          condition={this.state.questionDeleted} 
        />
        {this.showQuestionWhenLoaded()}
      </>  
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