import React from 'react';
import SelectOptions from './selectOptions';
import { Link } from 'react-router-dom';

class AddTopicToProjectForm extends React.Component {
  state = {
    projectId: 1
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  findProjectNameById(id) {
    const project = this.props.projects.find(project => project.id === parseInt(id));
    return project.name;
  }

  handleAddToProject = () => {
    this.props.handleAddToProject(this.state.projectId);
  }

  render() {
    return (
      <>
        <h3>Topic: {this.props.topic.name}</h3>
        <h3>Project:</h3>
        <select name="projectId" onChange={this.handleInputChange} value={this.state.projectId} >
          <SelectOptions objects={this.props.projects} />
        </select>
        <br />
        <button className="btn btn-primary" onClick={this.handleAddToProject}>
          Add {this.props.topic.name} To Project: {this.findProjectNameById(this.state.projectId)}
        </button>
        <br />
        <br />
        <Link to={`/topics/${this.props.topic.id}`} >
          <button className="btn btn-primary">
            Back To Topic: {this.props.topic.name}
          </button>
        </Link>
      </>
    )
  }
}

export default AddTopicToProjectForm;