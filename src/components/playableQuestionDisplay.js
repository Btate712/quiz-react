import React from 'react';

function PlayableQuestionDisplay(props) {
  const question = props.question;
  return (
    <div className="Question container" >
      <h3>Question Id: {question.id}</h3>
      <h1 dangerouslySetInnerHTML={{__html: question.stem}} />
      <br />
      <h1 id="1" className="ml-5 playable-question-choice" onClick={props.handleSelection}
        dangerouslySetInnerHTML={{__html: `A. ${question.choice_1}`}} />
      <h1 id="2" className="ml-5 playable-question-choice" onClick={props.handleSelection}
        dangerouslySetInnerHTML={{__html: `B. ${question.choice_2}`}} />
      <h1 id="3" className="ml-5 playable-question-choice" onClick={props.handleSelection}
        dangerouslySetInnerHTML={{__html: `C. ${question.choice_3}`}} />
      <h1 id="4" className="ml-5 playable-question-choice" onClick={props.handleSelection}
        dangerouslySetInnerHTML={{__html: `D. ${question.choice_4}`}} />
      <br />
      {props.showGradedQuestion()}        
    </div>
  )
}

export default PlayableQuestionDisplay;