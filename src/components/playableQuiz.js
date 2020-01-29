import React from 'react';
import { connect } from 'react-redux';


class PlayableQuiz extends React.Component {
  render() {
    return (
      <div>
        Playable Quiz...
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