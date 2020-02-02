import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import HomeContainer from './containers/homeContainer';
import TopicsContainer from './containers/topicsContainer';
import QuestionsContainer from './containers/questionsContainer';
import QuizContainer from './containers/quizContainer';
import ProjectAccessContainer from './containers/projectAccessContainer';
import { connect } from 'react-redux';
import { checkToken } from './actions/userActions';
import SiteTemplateHeader from './containers/siteTemplateHeader';



class App extends Component {

  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Route path="/"><SiteTemplateHeader /></Route>
          <Switch>
            <PrivateRoute exact path="/" component={HomeContainer} loginStatus={this.props.user.loggedIn} />

            <Route path="/login" component={LoginContainer} />

            <Route path="/register" component={RegisterContainer} />

            <PrivateRoute path="/home" component={HomeContainer} loginStatus={this.props.user.loggedIn} />
            
            <PrivateRoute path="/topics" component={TopicsContainer} loginStatus={this.props.user.loggedIn} />

            <PrivateRoute path="/questions" component={QuestionsContainer} loginStatus={this.props.user.loggedIn} />
            
            <PrivateRoute path="/quiz" component={QuizContainer} loginStatus={this.props.user.loggedIn} />

            <PrivateRoute path="/project-access" component={ProjectAccessContainer} loginStatus={this.props.user.loggedIn} />

          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, loginStatus, ...rest }) => {
  return (
    <Route {...rest} 
    render={ props => ( loginStatus === true ? <Component { ...props } /> : <Redirect to="/login"  />)} />
  )
}

const mapStateToProps = state => {
  return({
    user: state.user
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    checkToken: (url) => dispatch(checkToken(url))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
