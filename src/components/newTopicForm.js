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

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTopic(this.state.name, this.state.projectId, this.props.token);
    this.props.getTopics(this.props.token);
    this.setState({complete: true});
   }
  
  render() {
    console.log(this.props)
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