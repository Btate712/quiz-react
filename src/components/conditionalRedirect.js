import React from 'react';
import { useHistory } from 'react-router-dom';


function ConditionalRedirect(props) {
  let history = useHistory();
  if (props.condition === true) {
    history.push(props.to);
  } 
  return (<></>); 
} 

export default ConditionalRedirect;