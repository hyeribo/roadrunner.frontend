import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainHeader from '@components/header/MainHeader';
import MainBottom from '@components/bottom/MainBottom';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';

const Main = ({ match }) => {
  console.log("match", match);
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route exact path={`${match.path}/mypage`} component={MyPage} />
      </Switch>
      <MainBottom />
    </div>
  )
}

export default Main;