import React from 'react';
import { getQuestions } from '../actions/questionActions';
import { URL } from '../appData/applicationConstants';
import { connect } from 'react-redux';
import QuestionContainer from './questionContainer';
import NewQuestionContainer from './newQuestionContainer';
import { Switch, Route, Link } from 'react-router-dom';

class QuestionsContainer extends React.Component {
  componentDidMount() {
    this.props.getQuestions(URL);
  }

  showQuestionsWhenLoaded() {
    const questions = this.props.questions.questionList;
    if(questions) {
      return questions.map((question, key) => {
        return (<h3 key={key} ><Link to={`/questions/${question.id}`}> {question.stem} </Link></h3>) 
      })
    }
  }

  render() {

    return(
      <div>
        <Switch>
          <Route path={"/questions/new"}><NewQuestionContainer /></Route>
          <Route path={"/questions/:id"} render={({match}) => {
            const id = match.params.id;
            return (<QuestionContainer questionId={id} />)
          }} />
          <Route path="/questions">{this.showQuestionsWhenLoaded()}</Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getQuestions: (url) => dispatch(getQuestions(url))
  });
}

const mapStateToProps = state => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
