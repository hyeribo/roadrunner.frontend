import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// intro
import Login from "@pages/Intro/Login";
import Join from "@pages/Intro/Join";

// main
import Home from "@pages/Home";
import MyRequests from "@pages/My/MyRequests";
import Chattings from "@pages/Chatting/Chattings";
import MyPage from "@pages/My/MyPage";
import Sample from "@pages/Sample";

// sub
import Write from "@pages/Write";
import RequestWrite from "@pages/Request/RequestWrite";
import RequestModify from "@pages/Request/RequestModify";
import RequestDetail from "@pages/Request/RequestDetail";
import ProposalWrite from "@pages/Proposal/ProposalWrite";
import ProposalModify from "@pages/Proposal/ProposalModify";
import ProposalDetail from "@pages/Proposal/ProposalDetail";
import MyInfo from "@pages/My/MyInfo";
import MyPassword from "@pages/My/MyPassword";
import MyReviews from "@pages/My/MyReviews";
import MySettings from "@pages/My/MySettings";
import Notice from "@pages/Public/Notice";
import Faq from "@pages/Public/Faq";
import Terms from "@pages/Public/Terms";
import CustomerService from "@pages/Public/CustomerService";
import ChattingsModify from "@pages/Chatting/ChattingsModify";
import ChattingRoom from "@pages/Chatting/ChattingRoom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/my/requests" component={MyRequests} />
        <Route exact path="/chattings" component={Chattings} />
        <Route exact path="/Sample" component={Sample} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />

        <Route exact path="/write" component={Write} />
        <Route exact path="/request/write" component={RequestWrite} />
        <Route
          exact
          path="/request/modify/:request_id"
          component={RequestModify}
        />
        <Route
          exact
          path="/request/detail/:request_id"
          component={RequestDetail}
        />
        <Route exact path="/proposal/write" component={ProposalWrite} />
        <Route
          exact
          path="/proposal/modify/proposal_id"
          component={ProposalModify}
        />
        <Route
          exact
          path="/proposal/detail/proposal_id"
          component={ProposalDetail}
        />
        <Route exact path="/my/info" component={MyInfo} />
        <Route exact path="/my/password" component={MyPassword} />
        <Route exact path="/my/reviews" component={MyReviews} />
        <Route exact path="/my/settings" component={MySettings} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/cs" component={CustomerService} />
        <Route exact path="/chattings/modify" component={ChattingsModify} />
        <Route
          exact
          path="/chattings/room/:chatting_id"
          component={ChattingRoom}
        />
      </Switch>
    </Router>
  );
};

export default App;
