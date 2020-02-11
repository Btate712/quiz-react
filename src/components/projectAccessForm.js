import React from 'react';
import { assignProject } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';
import SelectOptions from './selectOptions';

class projectAccessForm extends React.Component {
  state = {
    projectId: this.props.projects.projectList[0].id.toString(),
    userId: this.props.users.userList[0].id.toString()
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  assign = () => {
    assignProject(URL, parseInt(this.state.userId), parseInt(this.state.projectId), this.props.user.token);
  }

  render() {
    return (
      <div>
        <label>
          Project: <select name="projectId" onChange={this.handleInputChange} value={this.state.projectId} >
            <SelectOptions objects={this.props.projects.projectList} />
          </select>
        </label>
        <br />
        <br />
        <label>
          User: <select name="userId" onChange={this.handleInputChange} value={this.state.userId} >
            <SelectOptions objects={this.props.users.userList} />
          </select>
        </label>
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.assign}>Assign</button>
      </div>
    );
  }
}

export default projectAccessForm;