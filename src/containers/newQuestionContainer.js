import React from 'react';
import NewQuestionForm from '../components/newQuestionForm';

class newQuestionContainer extends React.Component {
  render() {
    return(
      <div className="container">
        <NewQuestionForm />
      </div>
    )
  }
}

export default newQuestionContainer;