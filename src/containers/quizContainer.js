import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewQuizContainer from './newQuizContainer';

class QuizContainer extends React.Component {
  render() {
    return(
      <div>
        <h1>Quiz Container</h1>
        <Switch>
          <Route path="/quiz/new"><NewQuizContainer /></Route>
        </Switch>
      </div>
    )
  }
}

export default QuizContainer;