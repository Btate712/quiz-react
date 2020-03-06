import React from 'react';
import ConditionalRedirect from './conditionalRedirect';
import SelectOptions from './selectOptions';

class NewTopicForm extends React.Component {

  state = {
    name: "",
    complete: false,
    projectId: 1
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }
  // Flatiron Assessment
  handleSubmit = event => {
    event.preventDefault();
    console.log('A') // Fires first because no async calls have been made yet
    this.props.createTopic(this.state.name, this.state.projectId, this.props.token); 
    console.log('B') // Fires after 'F' but before 'D'. If there were more code between 'F' 
                     // and 'B', it's possible that 'D' would fire before 'B' if the fetch and response
                     // functions resolved before the code between 'F' and 'B' could execute. Since 'B' 
                     // comes immediately after 'F', it should always fire first.
    this.setState({complete: true});
   }
  
  render() {
    return(
      <div className="container" >
        <h1>New Topic:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Topic Name:</label>
            <input name="name" id="name" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.name} />
          </div>
          <label>
            Project: <select name="projectId" onChange={this.handleInputChange} value={this.state.projectId} >
              <SelectOptions objects={this.props.projects} />
            </select>
          </label>
          <br />
          <input type="submit" className="btn btn-primary"/>
        </form>
        <ConditionalRedirect to="/topics" condition={this.state.complete} />
      </div>
    )
  }
}

export default NewTopicForm;