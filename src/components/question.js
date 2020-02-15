import React from 'react';
import { numberToLetter } from '../actions/questionActions';
import SanitizedHTML from 'react-sanitized-html';

const Question = props => {
  const question = props.question;

  return (
    <div className="Question container">
        <h3>ID: {question.id}</h3>
        <h1><SanitizedHTML html={question.stem} /></h1>
        <br />
        <h1 id="1" className="ml-5 question-choice"><SanitizedHTML html={`A. ${question.choice_1}`} /></h1> 
        <h1 id="2" className="ml-5 question-choice"><SanitizedHTML html={`B. ${question.choice_2}`} /></h1> 
        <h1 id="3" className="ml-5 question-choice"><SanitizedHTML html={`C. ${question.choice_3}`} /></h1> 
        <h1 id="4" className="ml-5 question-choice"><SanitizedHTML html={`D. ${question.choice_4}`} /></h1> 
      <br />
      <h2>Correct Choice: {numberToLetter(parseInt(question.correct_choice))}</h2>
      <br />
    </div>
  )
}

export default Question;