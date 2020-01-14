import React from 'react';

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
    <div className="Question">
      <h1>{question.stem}</h1>
      <br />
      <h1 className="ml-5">A. {question.choice_1}</h1>
      <h1 className="ml-5">B. {question.choice_2}</h1>
      <h1 className="ml-5">C. {question.choice_3}</h1>
      <h1 className="ml-5">D. {question.choice_4}</h1>
      <br />
      <h2>Correct Choice: {numberToLetter(question.correct_choice)}</h2>
    </div>
  )
}

export default Question;