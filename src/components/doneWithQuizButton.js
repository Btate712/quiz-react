import React from 'react';

const DoneWithQuizButton = props => {
  return(
    <button className="btn btn-primary" onClick={props.storeResults}>Done - Store Results</button>
  )
}

export default DoneWithQuizButton;