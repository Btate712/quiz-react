import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTopicToProject } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';

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

  handleAddToProject = () => {
    addTopicToProject(URL, this.props.topic.id, 1, this.props.user.token);
  }

  adminButtons = () => {
    if(this.props.user.admin === true) {
      return (
        <>
          <Link to="/questions/new"><button className="btn btn-lg border">Create a New Question</button></Link>
          <button className="btn btn-lg border" onClick={() => this.handleDelete()}>Delete Topic</button>
          <button className="btn btn-lg border" onClick={() => this.handleAddToProject()}>Add Topic to Project</button>
        </>
      )
    }
  }

  render() {
    return (
      <div className="Topic container">
        <h1>Topic: {this.props.topic.name}</h1>
        <h2>Topic Id#: {this.props.topic.id}</h2>
        <h2>Questions: ({this.props.questions.length} in bank)</h2>
        {this.showQuestions()}
        {this.adminButtons()}
        {this.redirectWhenComplete()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.user
  })
}

export default connect(mapStateToProps)(Topic)
