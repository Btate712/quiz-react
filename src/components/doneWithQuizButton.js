import React from 'react';

const DoneWithQuizButton = props => {
  return(
    <button className="btn btn-lg border" onClick={props.storeResults}>Done - Store Results</button>
  )
}

export default DoneWithQuizButton;