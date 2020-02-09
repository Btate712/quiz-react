import React from 'react';
import Question from './question';
import { numberToLetter } from '../actions/questionActions';

export function QuizSummary(props) {
  const score = getScore(props.quiz.questions);
  const output = props.quiz.questions.map((question, index) => {
    return(
      <div key={index}>
        <h3>Question Id: {question.id}</h3>
        <h1>Question #{index + 1}: </h1>
        <Question question={question} />
        <div className="container">
          <h2 className={question.choice === question.correct_choice ? "correct" : "incorrect"}>
            You answered: {numberToLetter(question.choice)}
          </h2>
        </div>
        <hr />
      </div>
    )
  })
  return(
    <>
      <h1>{score.numberRight} out of {score.outOf} correct:  {(score.numberRight * 100 / score.outOf).toFixed(2)}%.</h1>
      <button className="btn btn-lg border" onClick={props.storeResults}>Done - Store Results</button>
      <hr />
      {output}
      <button className="btn btn-lg border" onClick={props.storeResults}>Done - Store Results</button>
    </>
  )
}

function getScore(questions) {
  let numberRight = 0;
  const outOf = questions.length;
  questions.forEach(question => {
    if (question.choice === question.correct_choice) {
      numberRight += 1;
    }
  })
  return {numberRight: numberRight, outOf: outOf}
}

