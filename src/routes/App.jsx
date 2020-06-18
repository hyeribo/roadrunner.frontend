import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeI18nLanguage } from "@config/i18n";

// Antd internationalization
import enUS from "antd/lib/locale-provider/en_US";
import koKR from "antd/lib/locale-provider/ko_KR";

// 인증후 접근가능한 Route
import AuthRoute from "@routes/AuthRoute";

// intro
import Login from "@pages/Intro/Login";
import Join from "@pages/Intro/Join";

// main
import Home from "@pages/Home";
import MyRequests from "@pages/My/MyRequests";
import Chattings from "@pages/Chatting/Chattings";
import MyPage from "@pages/My/MyPage";

// sub
import Write from "@pages/Intro/Write";
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
import Team from "@pages/Public/Team";
import ChattingsModify from "@pages/Chatting/ChattingsModify";
import ChattingRoom from "@pages/Chatting/ChattingRoom";

import userModel from "@data/userModel";
import { setUser } from "@modules/user/userActions";
import constants from "@config/constants";

const locale = {
  en: enUS,
  ko: koKR,
};

const App = () => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changeI18nLanguage(lang); // change i18n
  }, [lang]);

  const handleCheckLogin = async () => {
    try {
      // 로컬스토리지에서 토큰 가져오기
      const token = localStorage.getItem(constants.LOCAL_TOKEN_KEY);
      // 토큰 없으면 에러
      if (!token) throw Error("Token does not exist.");
      // 토큰 유효 체크
      const result = await userModel.verifyToken();
      // 로그인 유저 정보 리덕스에 저장
      dispatch(setUser(result.data.data.user));
      // 인증 성공 상태로 변경
      setAuthenticated(true);
    } catch (error) {
      // 인증 실패 상태로 변경
      setAuthenticated(false);
    } finally {
      // 로딩 해제
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCheckLogin();
  }, []);

  return (
    <ConfigProvider locale={locale[lang]}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login setAuthenticated={setAuthenticated} {...props} />
            )}
          />
          <Route exact path="/join" component={Join} />
          <AuthRoute
            exact
            path="/home"
            component={Home}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my/requests"
            component={MyRequests}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/chattings"
            component={Chattings}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my"
            component={MyPage}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/write"
            component={Write}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/request/write"
            component={RequestWrite}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/request/modify/:request_id"
            component={RequestModify}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/request/detail/:request_id"
            component={RequestDetail}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/proposal/write"
            component={ProposalWrite}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/proposal/modify/proposal_id"
            component={ProposalModify}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/proposal/detail/proposal_id"
            component={ProposalDetail}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my/info"
            component={MyInfo}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my/password"
            component={MyPassword}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my/reviews"
            component={MyReviews}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/my/settings"
            authenticated={authenticated}
            loading={loading}
            render={(props) => (
              <MySettings setAuthenticated={setAuthenticated} {...props} />
            )}
          />
          <AuthRoute
            exact
            path="/notice"
            component={Notice}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/faq"
            component={Faq}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/terms"
            component={Terms}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/cs"
            component={CustomerService}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/team"
            component={Team}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/chattings/modify"
            component={ChattingsModify}
            authenticated={authenticated}
            loading={loading}
          />
          <AuthRoute
            exact
            path="/chattings/room/:chatting_id"
            component={ChattingRoom}
            authenticated={authenticated}
            loading={loading}
          />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
