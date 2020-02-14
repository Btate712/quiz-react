import React from 'react';
import { Link } from 'react-router-dom';

function QuestionAdminButtons(props) {
  if(props.userIsAdmin === true) {
    return (
      <>
        <Link to={`/questions/${props.questionId}/edit`}>
          <button className="btn btn-lg border">
            Edit Question
          </button>
        </Link>
        <button className="btn btn-lg border pull-right" onClick={props.deleteQuestion} >
          Delete Question
        </button>
        <button className="btn btn-lg border" onClick={props.showNewCommentForm}>
          Add Explanation
        </button>
      </>
    );
  } else {
    return (<></>);
  }
}

export default QuestionAdminButtons;