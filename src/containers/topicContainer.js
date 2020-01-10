import React, { Component } from 'react';

class TopicContainer extends Component {
  render() {
    return (
      <div>
        <h1>Individual Topic #{this.props.topicId}...</h1>
      </div>  
    );
  }
}

export default TopicContainer;