import React from 'react';
import { numberToLetter } from '../actions/questionActions';
import SanitizedHTML from 'react-sanitized-html';

const showGradedQuestion = (questionAnswered, question, selection, storeResult) => {
  if(questionAnswered) {
    const correct = question.correct_choice === selection ? true : false
    const message = correct ? "Correct!" : `Incorrect. The correct answer is ${numberToLetter(question.correct_choice)}`
    return (
      <>
        <h1>{message}</h1>
        <button className="btn btn-primary" onClick={storeResult} >Next Question</button>
      </>
    )
  }
}

export function PlayableQuestionDisplay(props) {
  const question = props.question;
  return (
    <div className="Question container" >
      <h3>Question Id: {question.id}</h3>
      <h1> <SanitizedHTML html={question.stem} /></h1>
      <br />
      <h1 className="ml-5 playable-question-choice" onClick={props.handleSelection}>
        <SanitizedHTML id="1" html={`A. ${question.choice_1}`} />
      </h1>
      <h1 className="ml-5 playable-question-choice" onClick={props.handleSelection}>
        <SanitizedHTML id="2" html={`B. ${question.choice_2}`} />
      </h1>
      <h1 className="ml-5 playable-question-choice" onClick={props.handleSelection}>
        <SanitizedHTML id="3" html={`C. ${question.choice_3}`} />
      </h1>
      <h1 className="ml-5 playable-question-choice" onClick={props.handleSelection}>
        <SanitizedHTML  id="4" html={`D. ${question.choice_4}`} />
      </h1>
      <br />
      {showGradedQuestion(props.questionAnswered, props.question, props.selection, props.storeResult)}        
    </div>
  )
}


