import React from 'react';
import { Link } from 'react-router-dom';

class HomeContainer extends React.Component {

  render() {
    return (
      <>
        <h1>
          Welcome...
          <br />
          <br />
        </h1>
        <Link to="/quiz"><h2>Take a Quiz</h2></Link>
      </>
    )
  }
}

export default HomeContainer;
