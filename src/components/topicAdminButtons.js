import React from 'react';
import { Link } from 'react-router-dom';

function TopicAdminButtons(props) {
  if(props.userIsAdmin) {
    return (
      <>
        <Link to="/questions/new"><button className="btn btn-primary mr-1">Create a New Question</button></Link>
        <button className="btn btn-primary mr-1" onClick={props.handleDelete}>Delete Topic</button>
        <Link to="/project-topics/new"><button className="btn btn-primary" >Add Topic to Project</button></Link>
      </>
    )
  } else {
    return <></>
  }
}

export default TopicAdminButtons;