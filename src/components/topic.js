import React from 'react';
import { Link } from 'react-router-dom';

const Topic = props => {
  const showQuestions = () => {
    const questions = props.questions;
    return (
      questions.map((question, key) => {
        return(
          <h3 key={key} className="ml-4">
            <Link to={`/questions/${question.id}`} >
              { question.stem }
            </Link>
          </h3>
        );
      })
    );
  }

  return (
    <div className="Topic">
      <h1>Topic: {props.topic.name}</h1>
      <h2>Topic #: {props.topic.id}</h2>
      <h2>Questions:</h2>
      {showQuestions()}
    </div>
  )
}

export default Topic
