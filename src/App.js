import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {
              // Route to home page or login 
              }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
