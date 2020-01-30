import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import HomeContainer from './containers/homeContainer';
import TopicsContainer from './containers/topicsContainer';
import QuestionsContainer from './containers/questionsContainer';
import QuizContainer from './containers/quizContainer';
import { connect } from 'react-redux';
import { checkToken } from './actions/userActions';
import SiteTemplateHeader from './containers/siteTemplateHeader';


class App extends React.Component {

  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Route path="/"><SiteTemplateHeader /></Route>
          <Switch>
            <PrivateRoute exact path="/" component={HomeContainer} />

            <Route path="/login" component={LoginContainer} />

            <Route path="/register" component={RegisterContainer} />

            <PrivateRoute path="/home" component={HomeContainer} />
            
            <PrivateRoute path="/topics" component={TopicsContainer} />

            <PrivateRoute path="/questions" component={QuestionsContainer} />
            
            <PrivateRoute path="/quiz" component={QuizContainer} />
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
