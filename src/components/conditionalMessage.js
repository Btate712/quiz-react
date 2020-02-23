import React from 'react';

function ConditionalMessage(props) {
  return props.condition ? <h2 className={props.className}>{props.message}</h2> : <></>
}

export default ConditionalMessage;