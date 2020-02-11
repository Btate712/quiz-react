import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <>
        {console.log(this.props.comments)}
      </>
    );
  }
}

export default Comments;