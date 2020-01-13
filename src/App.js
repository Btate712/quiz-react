import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './containers/loginContainer';
import HomeContainer from './containers/homeContainer';
import TopicsContainer from './containers/topicsContainer';
import { connect } from 'react-redux';
import checkToken from './actions/checkToken';
import SiteTemplateHeader from './containers/siteTemplateHeader';

class App extends React.Component {


  componentDidMount() {
    this.props.checkToken(URL);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/"><SiteTemplateHeader /></Route>
          <Switch>
            <PrivateRoute exact path="/"><HomeContainer /></PrivateRoute>

            <Route path="/login"><LoginContainer /></Route>

            <PrivateRoute path="/home"><HomeContainer /></PrivateRoute>

            {
              /* 
              Need to figure out how to make show route work with 
              PrivateRoute.  The route below works as <Route />, but
              not as <PrivateRoute /> 
              */
            }
            
            <PrivateRoute path="/topics"><TopicsContainer /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
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
