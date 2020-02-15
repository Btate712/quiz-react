import React from 'react';
import { Link } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';

function QuestionList(props) {
  const questions = props.questions.sort((a, b) => a.id - b.id);
    return (
      questions.map((question, key) => {
        return(
          <h3 key={key} className="ml-4">
            <Link to={`/questions/${question.id}`}><SanitizedHTML html={`${question.id}: ${question.stem}`} /></Link>
          </h3>
        );
      })
    );
}

export default QuestionList;