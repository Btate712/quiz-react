import React from 'react';
import Comment from './comment';

class Comments extends React.Component {

  renderWhenAvailable = () => {
    if(this.props.comments.length > 0) {
      return (
        <>
          { this.props.comments.map(comment => {
            return (
              <Comment 
                comment={comment.comment} 
                commentUser={comment.user_name}
                user={this.props.user}
                key={`comment#${comment.comment.id}`}
                deleteComment={this.props.deleteComment}
              /> 
            ) 
          })} 
        </>
      )
    } else {
      return (
        <h2>
          No Comments Available...
        </h2>)
    }
  }

  showIfRequested = () => {
    if (this.props.show ) {
      return (
        <>
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