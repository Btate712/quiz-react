import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Topic extends React.Component {
  state = {
    complete: false
  }
  
  showQuestions = () => {
    const questions = this.props.questions;
    return (
      questions.map((question, key) => {
        return(
          <h3 key={key} className="ml-4">
            <Link to={`/questions/${question.id}`} dangerouslySetInnerHTML={{__html: `${question.id}: ${question.stem}`}} />
          </h3>
        );
      })
    );
  }

  handleDelete = () => {
    const confirmation = window.confirm("Delete this topic?");
    if (confirmation === true) {
      this.props.deleteTopic(this.props.topic.id, this.props.user.token); 
      this.setState ({
        complete: true
      })  
    }
  }

  redirectWhenComplete = () => {
    if (this.state.complete === true) {
      return (<Redirect to="/topics" />);
    }
  }

  adminButtons = () => {
    if(this.props.user.admin === true) {
      return (
        <>
          <Link to="/questions/new"><button className="btn btn-lg border">Create a New Question</button></Link>
          <button className="btn btn-lg border" onClick={() => this.handleDelete()}>Delete Topic</button>
        </>
      )
    }
  }

  render() {
    return (
      <div className="Topic container">
        <h1>Topic: {this.props.topic.name}</h1>
        <h2>Topic Id#: {this.props.topic.id}</h2>
        <h2>Questions:</h2>
        {this.showQuestions()}
        {this.adminButtons()}
        {this.redirectWhenComplete()}
      </div>
    )
  }
}

export default Topic
