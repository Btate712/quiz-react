import React from 'react';
import ConditionalRedirect from './conditionalRedirect';
import SelectOptions from './selectOptions';
import { useInputHooks } from '../helperFunctions';

function NewTopicForm(props) {

  const [input, handleInputChange, setInput] = useInputHooks({
    name: "",
    complete: false,
    projectId: 1
  })

  const handleSubmit = event => {
    event.preventDefault();
    props.createTopic(input.name, input.projectId, props.token); 
    setInput({complete: true});
   }
  
  return(
    <div className="container" >
      <h1>New Topic:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Topic Name:</label>
          <input name="name" id="name" type="text" className="form-control" onChange={handleInputChange} value={input.name} />
        </div>
        <label>
          Project: <select name="projectId" onChange={handleInputChange} value={input.projectId} >
            <SelectOptions objects={props.projects} />
          </select>
        </label>
        <br />
        <input type="submit" className="btn btn-primary"/>
      </form>
      <ConditionalRedirect to="/topics" condition={input.complete} />
    </div>
  )
}

export default NewTopicForm;