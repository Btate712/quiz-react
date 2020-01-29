import React from 'react';

class PlaybleQuestion extends React.Component {
  
  handleSelection = (event) => {
    if (parseInt(event.target.id) === this.props.question.correct_choice) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }

  render() {
    const question = this.props.question;
    return (
      <div className="Question">
        <h1>{question.stem}</h1>
        <br />
        <h1 id="1" className="ml-5 question-choice" onClick={this.handleSelection}>A. {question.choice_1}</h1>
        <h1 id="2" className="ml-5 question-choice" onClick={this.handleSelection}>B. {question.choice_2}</h1>
        <h1 id="3" className="ml-5 question-choice" onClick={this.handleSelection}>C. {question.choice_3}</h1>
        <h1 id="4" className="ml-5 question-choice" onClick={this.handleSelection}>D. {question.choice_4}</h1>
      </div>
    )
  }
}

export default PlaybleQuestion;