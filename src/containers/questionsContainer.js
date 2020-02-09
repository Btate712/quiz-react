import React from 'react';
import { getQuestions } from '../actions/questionActions';
import { URL } from '../appData/applicationConstants';
import { connect } from 'react-redux';
import QuestionContainer from './questionContainer';
import NewQuestionContainer from './newQuestionContainer';
import { Switch, Route } from 'react-router-dom';
import QuestionList from '../components/questionList';

class QuestionsContainer extends React.Component {
  componentDidMount() {
    this.props.getQuestions(this.props.user.token);
  }

  showQuestionsWhenLoaded() {
    const questions = this.props.questions.questionList;
    if(questions) {
      return <QuestionList questions={this.props.questions.questionList} />
    }
  }

  render() {

    return(
      <div>
        <Switch>
          <Route path={"/questions/new"}><NewQuestionContainer mode="new"/></Route>
          <Route path={"/questions/:id"} render={({match}) => {
            const id = match.params.id;
            return (<QuestionContainer questionId={id} />)
          }} />
          <Route path="/questions">
            <div className="container">
              {this.showQuestionsWhenLoaded()}
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getQuestions: (token) => dispatch(getQuestions(URL, token))
  });
}

const mapStateToProps = state => {
  return ({
    questions: state.questions,
    user: state.user
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
