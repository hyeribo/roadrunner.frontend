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
import { useTranslation } from "react-i18next";

// Antd internationalization
import enUS from "antd/lib/locale-provider/en_US";
import koKR from "antd/lib/locale-provider/ko_KR";

// 인증후 접근가능한 Route
import AuthRoute from "@routes/AuthRoute";

import userModel from "@data/userModel";
import { setUser } from "@modules/user/userActions";
import constants from "@config/constants";
import routes from "@config/routes";

const locale = {
  en: enUS,
  ko: koKR,
};

const App = () => {
  const { t } = useTranslation();
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
          {routes.map((route, i) =>
            route.auth ? (
              <AuthRoute
                key={i}
                exact
                path={route.path}
                component={route.component}
                authenticated={authenticated}
                loading={loading}
                componentProps={{
                  t: t,
                  setAuthenticated: setAuthenticated,
                }}
              />
            ) : (
              <Route
                key={i}
                exact
                path={route.path}
                render={(props) => (
                  <route.component
                    {...props}
                    t={t}
                    setAuthenticated={setAuthenticated}
                  />
                )}
              />
            )
          )}
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
