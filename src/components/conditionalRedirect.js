import React from 'react';
import { Redirect } from 'react-router-dom';


function ConditionalRedirect(props) {
  if (props.condition ) {
    return (
      <Redirect to={props.to} />
    );
  } else {
    return (<></>); 
  }
} 

export default ConditionalRedirect;