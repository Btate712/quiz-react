import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import { URL } from '../appData/applicationConstants';
import ProjectSelectionForm from '../components/ProjectSelectionForm';

class HomeContainer extends React.Component {

  componentDidMount = () => {
    this.props.getProjects(this.props.user.token);
  }

  allowProjectSelectionWhenLoaded() {
    if(this.props.projects.inProgress) {
      return ( <h1>Loading Projects...</h1> )
    } else {
      return ( <ProjectSelectionForm projects={this.props.projects}/> )
    }
  }

  render() {
    return (
      <div className="container border">
        <h1>
          Welcome...
          <br />
          <br />
        </h1>
        <h2>Select Projects:</h2>
        {this.allowProjectSelectionWhenLoaded()}
        <Link to="/quiz"><h2>Take a Quiz</h2></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    projects: state.projects,
    user: state.user
  })  
}

const mapDispatchToProps = dispatch => {
  return({
    getProjects: (token) => dispatch(getProjects(URL, token))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
