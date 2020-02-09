import React from 'react';
import { Redirect } from 'react-router-dom';

class NewTopicForm extends React.Component {

  state = {
    name: "",
    complete: false
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTopic(this.state.name, this.props.token);
    this.props.getTopics(this.props.token);
    this.setState({complete: true});
   }

  redirectWhenComplete = () => {
    if (this.state.complete === true) {
      return (<Redirect to="/topics" />);
    }
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
            <input type="submit" className="btn btn-primary"/>
          </form>
          <div className={this.state.complete}>
            {this.redirectWhenComplete()}
          </div>
      </div>
    )
  }
}

export default NewTopicForm;