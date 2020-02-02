import React from 'react';
import { connect } from 'react-redux';

class projectAccessForm extends React.Component {
  state = {
    projectId: 1,
    userId: 1
  }

  listProjectOptions = () => {
    return this.props.projects.projectList.map(project => {
      return (<option value={project.id}>{project.name}</option>)
    })
  }

  listUserOptions = () => {
    return this.props.users.userList.map(user => {
      return ( <option value={user.id}>{user.name}</option> )
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  assign = () => {
    alert(`Assigning user #${this.state.userId} access to project #${this.state.projectId}`);
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

const mapStateToProps = state => {
  return ({
    user: state.user,
    projects: state.projects,
    users: state.users
  })

}

export default connect(mapStateToProps)(projectAccessForm);