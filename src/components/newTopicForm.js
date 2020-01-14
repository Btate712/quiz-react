import React from 'react';

class NewTopicForm extends React.Component {

  state = {
    name: ""
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(`New Topic: Name = ${this.state.name}`);
  }

  render() {
    return(
      <div>
        <h1>New Topic:</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Topic Name:</label>
              <input name="name" id="name" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.name} />
            </div>
            <input type="submit" className="btn btn-primary"/>
          </form>
      </div>
    )
  }
}

export default NewTopicForm;