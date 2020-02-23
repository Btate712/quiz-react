import React from 'react';
import { Link } from 'react-router-dom';

function TopicAdminButtons(props) {
  if(props.userIsAdmin) {
    return (
      <>
        <Link to="/questions/new"><button className="btn btn-lg border">Create a New Question</button></Link>
        <button className="btn btn-lg border" onClick={props.handleDelete}>Delete Topic</button>
        <Link to="/project-topics/new"><button className="btn btn-lg border" >Add Topic to Project</button></Link>
      </>
    )
  } else {
    return <></>
  }
}

export default TopicAdminButtons;