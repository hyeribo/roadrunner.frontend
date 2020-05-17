import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "@pages/Home";
import Write from "@pages/Write";
import MyRequests from "@pages/My/MyRequests";
import Chattings from "@pages/Chatting/Chattings";
import MyPage from "@pages/My/MyPage";

import Login from "@pages/Intro/Login";
import Join from "@pages/Intro/Join";

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <Route exact path="/main" component={Home} />
        <Route exact path="/write" component={Write} />
        <Route exact path="/my/requests" component={MyRequests} />
        <Route exact path="/chattings" component={Chattings} />
        <Route exact path="/my" component={MyPage} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </Router>
  );
};

export default App;
