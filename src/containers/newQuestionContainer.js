import React from 'react';
import QuestionForm from '../components/questionForm';
import { URL } from '../appData/applicationConstants';
import { connect } from 'react-redux';
import { createQuestion, updateQuestion } from '../actions/questionActions';
import { getTopics } from '../actions/topicActions';

class newQuestionContainer extends React.Component {
  
  componentDidMount() {
    this.props.topics.length > 0 || this.props.getTopics(this.props.user.token);
  }

  render() {
    return(
      <div className="container">
        <QuestionForm 
          mode={this.props.mode}
          user={this.props.user}
          topics={this.props.topics}
          topic={this.props.topicForEdit || this.props.topic}
          question={this.props.question}
          createQuestion={this.props.createQuestion}
          updateQuestion={this.props.updateQuestion}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.user,
    topics: state.topics.topicList,
    topic: state.topic.topic.topic_info,
    question: state.question.question
  })
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question, token) => dispatch(createQuestion(URL, question, token)),
    updateQuestion: (question, id, token) => dispatch(updateQuestion(URL, question, id, token)),
    getTopics: (token) => dispatch(getTopics(URL, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newQuestionContainer);