import React from 'react';
import Comment from './comment';

class Comments extends React.Component {

  renderWhenAvailable = () => {
    if(this.props.comments.length > 0) {
      return (
        <>
          { console.log("have comments")}
          { this.props.comments.map(comment => <Comment comment={comment} key={comment.id}/> ) }
        </>
      )
    } else {
      return (
        <h2>
          {console.log("none")}
          No Comments Available...
        </h2>)
    }
  }

  showIfRequested = () => {
    if (this.props.show === true) {
      return (
        <>
          {console.log(this.props)}
          <hr />
          <h1><u>Comments:</u></h1>
          { this.renderWhenAvailable() }
        </>
      );
    } else {
      return <></>
    }
  }
  
  render() {
    return(<>{this.showIfRequested()}</>);  
  }
}

export default Comments;