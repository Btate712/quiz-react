import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import HomeContainer from './containers/homeContainer';
import TopicsContainer from './containers/topicsContainer';
import QuestionsContainer from './containers/questionsContainer';
import { connect } from 'react-redux';
import checkToken from './actions/checkToken';
import SiteTemplateHeader from './containers/siteTemplateHeader';

class App extends React.Component {

  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Route path="/"><SiteTemplateHeader /></Route>
          <Switch>
            <PrivateRoute exact path="/" ><HomeContainer /></PrivateRoute>

            <Route path="/login"><LoginContainer /></Route>

            <Route path="/register"><RegisterContainer /></Route>

            <PrivateRoute path="/home" ><HomeContainer /></PrivateRoute>
            
            <PrivateRoute path="/topics" ><TopicsContainer /></PrivateRoute>

            <PrivateRoute path="/questions" ><QuestionsContainer /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

function PrivateRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("loggedIn") ? (
          children
        ) : (
          <Redirect to="/login"  />
        )
      }
    />
  );
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
