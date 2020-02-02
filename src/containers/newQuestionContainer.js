import React from 'react';
import NewQuestionForm from '../components/newQuestionForm';

class newQuestionContainer extends React.Component {
  render() {
    return(
      <div className="container">
        <NewQuestionForm mode="new" />
      </div>
    )
  }
}

export default newQuestionContainer;