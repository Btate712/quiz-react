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

  const handleDelete = () => {
    props.deleteTopic(props.topic.id);
    
  }

  return (
    <div className="Topic">
      <h1>Topic: {props.topic.name}</h1>
      <h2>Topic #: {props.topic.id}</h2>
      <h2>Questions:</h2>
      {showQuestions()}
      <Link to="/questions/new"><button className="btn btn-lg border">Create a New Question</button></Link>
      <button className="btn btn-lg border" onClick={() => handleDelete()}>Delete Topic</button>
    </div>
  )
}

export default Topic
