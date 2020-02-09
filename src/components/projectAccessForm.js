import React from 'react';
import { assignProject } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';

class projectAccessForm extends React.Component {
  state = {
    projectId: 1,
    userId: 1
  }

  listProjectOptions = () => {
    return this.props.projects.projectList.map(project => {
      return (<option key={project.id} value={project.id}>{project.name}</option>)
    })
  }

  listUserOptions = () => {
    return this.props.users.userList.map(user => {
      return ( <option key={user.id} value={user.id}>{user.name}</option> )
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  assign = () => {
    assignProject(URL, parseInt(this.state.userId), this.state.projectId, this.props.user.token);
  }

  render() {
    return (
      <div>
        <label>
          Project: <select name="projectId" onChange={this.handleInputChange} value={this.state.projectId} >
            {this.listProjectOptions()}
          </select>
        </label>
        <br />
        <br />
        <label>
          User: <select name="userId" onChange={this.handleInputChange} value={this.state.userId} >
            {this.listUserOptions()}
          </select>
        </label>
        <br />
        <br />
        <button className="btn btn-primary"onClick={this.assign}>Assign</button>
      </div>
    );
  }
}

export default projectAccessForm;