import React from 'react';

class NewQuizForm extends React.Component {

  state = {
    numberOfTopics: "",
    topicsList: []
  }

  handleInputChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createQuiz(this.state.numberOfTopics, this.state.topicsList);
   }

  listTopics() {
    console.log(this.props.topics);
    return (
      this.props.topics.map((topic, key) => {
        return (
          <h4>
            <label key={key}>
              <input type="checkbox" name={topic.name} />
              {topic.name}
            </label>
          </h4>
        )
      })
    )
  }

  render() {
    return(
      <div className="container">
        <h1>New Quiz:</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h3>Topics:</h3>
              {this.listTopics()}
            </div>
            <input type="submit" className="btn btn-primary"/>
          </form>
      </div>
    )
  }
}

export default NewQuizForm;