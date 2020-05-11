import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Main from './Main';
import Login from './Login';
import Join from './Join';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;