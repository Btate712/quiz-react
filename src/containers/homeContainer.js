import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';

class HomeContainer extends React.Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.user.token);
  }

  render() {
    return (
      <div className="container border">
        <h1>
          Welcome...
          <br />
          <br />
        </h1>
        <Link to="/quiz"><h2>Take a Quiz</h2></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    selectedProjects: state.projects.selectedProjects,
    user: state.user
  })  
}

const mapDispatchToProps = dispatch => {
  return({
    getProjects: (token) => dispatch(getProjects(URL, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
