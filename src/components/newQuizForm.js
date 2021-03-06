import React from 'react';
import TopicList from './topicList';
import SelectAndDeselectAllButtons from './selectAndDeselectAllButtons';

class NewQuizForm extends React.Component {
  state = {
    numberOfQuestions: "10",
    topicsList: [],
  }

  handleInputChange = event => {
    if(event.target.type === "checkbox") {
      const newList = this.state.topicsList.slice(0);

      // toggle checkbox
      event.target.checked = event.target.checked ? false : true;
      // update topicsList
      const topicIndex = this.state.topicsList.findIndex(topicId => parseInt(event.target.id) === topicId) 
      if(topicIndex === -1) { // Array.findIndex returns -1 if element is not found
        newList.push(parseInt(event.target.id));
      } else {
        newList.splice(topicIndex, 1);
      }
      this.setState({
        topicsList: newList
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  isChecked = (id) => {
    return this.state.topicsList.find(topic => parseInt(id) === topic) ? true : false;
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createQuiz(this.state.numberOfQuestions, this.state.topicsList, this.props.token);
   }

  selectAll = event => {
    event.preventDefault();
    const newTopicsList = this.props.topics.map(topic => topic.id);
    this.setState({ topicsList: newTopicsList });
  }

  deSelectAll = event => {
    event.preventDefault();
    this.setState({ topicsList: [] })
  }

  render() {
    return(
      <div className="container">
        <h1>New Quiz:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h3>Topics:</h3>
            <TopicList 
              topics={this.props.topics}
              isChecked={this.isChecked}
              handleInputChange={this.handleInputChange}
            />
            <br />
            <SelectAndDeselectAllButtons selectAll={this.selectAll} deSelectAll={this.deSelectAll} />
          </div>
          <div className="form-group">
            <label >Number of Questions:</label>
            <input name="numberOfQuestions" type="text" value={this.state.numberOfQuestions} onChange={this.handleInputChange} />
          </div>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

export default NewQuizForm;