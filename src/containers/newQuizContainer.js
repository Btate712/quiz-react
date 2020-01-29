import React, { Component } from 'react';
import NewQuizForm from '../components/newQuizForm';

class NewQuizContainer extends Component {
  render() {
    return (
      <NewQuizForm topics={this.props.topics} />
    );
  }
}

export default NewQuizContainer;