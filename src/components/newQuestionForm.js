import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestionForm extends Component {
  render() {
    return (
      <form>
        New Question...
      </form>
    );
  }
}

const mapStateToProps = state => {
  return({
    user: state.user,
    topics: state.topics
  })
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: () => dispatch(() => console.log("Hi"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionForm);