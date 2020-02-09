import React from 'react';
import { addTopicToProject } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';
import TopicAdminButtons from './topicAdminButtons';
import QuestionList from './questionList';
import ConditionalRedirect from './conditionalRedirect';

class Topic extends React.Component {
  state = {
    complete: false
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

  handleAddToProject = () => {
    addTopicToProject(URL, this.props.topic.id, 1, this.props.user.token);
  }

  render() {
    return (
      <div className="Topic container">
        <h1>Topic: {this.props.topic.name}</h1>
        <h2>Topic Id#: {this.props.topic.id}</h2>
        <h2>Questions: ({this.props.questions.length} in bank)</h2>
        <QuestionList questions={this.props.questions} />
        <TopicAdminButtons 
          userIsAdmin={this.props.user.admin} 
          handleDelete={this.handleDelete}
          handleAddToProject={this.handleAddToProject}/>
        <ConditionalRedirect to="/topics" condition={this.state.complete} />
      </div>
    )
  }
}

export default Topic;
