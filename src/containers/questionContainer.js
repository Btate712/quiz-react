import React, { Component } from 'react';
import { URL } from '../appData/applicationConstants';
import { getQuestion, deleteQuestion } from '../actions/questionActions';
import { getComments, createComment, deleteComment } from '../actions/commentActions';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Link, Switch, Route } from 'react-router-dom';
import NewQuestionContainer from '../containers/newQuestionContainer';
import ConditionalRedirect from '../components/conditionalRedirect';
import QuestionAdminButtons from '../components/questionAdminButtons';
import CommentsContainer from '../containers/commentsContainer';

class QuestionContainer extends Component {
  state = {
    questionDeleted: false
  }

  componentDidMount() {
    this.props.getQuestion(this.props.questionId, this.props.user.token);
  }

  deleteQuestion = () => {
    const confirmation = window.confirm("Delete this question?");
    if (confirmation) {
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
          <button className="btn btn-primary">
            Back to topic: {this.props.topic.topic_info.name}
          </button>
        </Link>
      )
    } else {
      return (
        <Link to="/questions">
          <button className="btn btn-primary">
            Back to Questions
          </button>
        </Link>
      )
    }
  }

  dontAsk = comments => {
    if(comments.length > 0) {
      let blacklisted = false;
      const userComments = comments.filter(comment => comment.user_name.name === this.props.user.name);
      if(userComments.length > 0) {
        userComments.forEach(comment => {
          if(comment.comment.comment_type === "stop-asking") {
            blacklisted = true;
          }
        })
      }
      return blacklisted;
    }
  } 

  showQuestionWhenLoaded() {
    const question = this.props.question;
    if(question) {
      return (
        <Switch>
          <Route path="/questions/:id/edit">
          <NewQuestionContainer mode="edit" question={question.question} topicForEdit={question.topic}/>
          </Route>
          <Route path="/questions/:id">
            <Question topic={this.props.topic.topic_info} question={question.question} dontAsk={this.dontAsk(this.props.question.comments)} />
            <div className="container">
              <CommentsContainer 
                comments={question.comments}
                questionId={this.props.questionId}
              />
              {this.topicButtonIfLoaded()}
              <QuestionAdminButtons 
                questionId={question.question.id}
                userIsAdmin={this.props.user.admin} 
                topic={this.props.topic}
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
    question: state.question,
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