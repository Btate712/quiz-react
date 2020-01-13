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
      <h2>Topic Number: {props.topic.id}</h2>
      <h2>Topic: {props.topic.name}</h2>
      <h2>Questions:</h2>
      {showQuestions()}
    </div>
  )
}

export default Topic
