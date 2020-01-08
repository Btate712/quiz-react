import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './containers/loginContainer';
import Home from './components/home';
import { connect } from 'react-redux';
import checkToken from './actions/checkToken';
import SiteTemplateHeader from './containers/siteTemplateHeader';

class App extends React.Component {

  componentDidMount() {
    this.props.checkToken(URL);
  }

  mainOrLogin() {
    return this.props.user.loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/"><SiteTemplateHeader /></Route>
          <Switch>
            <Route exact path="/"> { this.mainOrLogin() } </Route>
            <Route path="/login"><LoginContainer /></Route>
            <Route path="/home"><Home /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
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
