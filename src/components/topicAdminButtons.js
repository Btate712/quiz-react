import React from 'react';
import { Link } from 'react-router-dom';

function TopicAdminButtons(props) {
  if(props.userIsAdmin === true) {
    return (
      <>
        <Link to="/questions/new"><button className="btn btn-lg border">Create a New Question</button></Link>
        <button className="btn btn-lg border" onClick={() => props.handleDelete()}>Delete Topic</button>
        <button className="btn btn-lg border" onClick={() => props.handleAddToProject()}>Add Topic to Project</button>
      </>
    )
  }
}

export default TopicAdminButtons;