import React from 'react';
import { Link } from 'react-router-dom';

const Topic = props => {
  return (
    <div className="Topic">
      <h3><Link to={`/topics/${props.id}`}> {props.name} </Link></h3>
    </div>
  )
}

export default Topic
