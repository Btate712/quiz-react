import React from 'react';
import { connect } from 'react-redux';
import PlayableQuestion from './playableQuestion';


class PlayableQuiz extends React.Component {
  render() {
    return (
      <div>
        <PlayableQuestion question={this.props.quiz.questions[0]} />
        {console.log(this.props.quiz)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quiz: state.quiz
  })
}

export default connect(mapStateToProps)(PlayableQuiz);