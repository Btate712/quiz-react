import React from 'react';
import { Link } from 'react-router-dom';

const Question = props => {
  const question = props.question;

  const numberToLetter = number => {
    switch(number) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        return "Not Found";
    }
  }

  return (
    <div className="Question container">
        <h1 dangerouslySetInnerHTML={{__html: question.stem}} />
        <br />
        <h1 id="1" className="ml-5 question-choice" dangerouslySetInnerHTML={{__html: `A. ${question.choice_1}`}} />
        <h1 id="2" className="ml-5 question-choice" dangerouslySetInnerHTML={{__html: `B. ${question.choice_2}`}} />
        <h1 id="3" className="ml-5 question-choice" dangerouslySetInnerHTML={{__html: `C. ${question.choice_3}`}} />
        <h1 id="4" className="ml-5 question-choice" dangerouslySetInnerHTML={{__html: `D. ${question.choice_4}`}} />
      <br />
      <h2>Correct Choice: {numberToLetter(question.correct_choice)}</h2>
      <br />
    <Link to={`/topics/${props.topic.id}`} ><button className="btn btn-lg border">Back to topic: {props.topic.name}</button></Link>
    </div>
  )
}

export default Question;