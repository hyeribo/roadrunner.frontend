import React, { useState } from "react";

import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [ state, setState ] = useState({
    nowPlaying:null,
    upComing:null,
    popular:null,
    error:null,
    loading:null
  });

  return (
    <MyPagePresenter 
        nowPlaying={state.nowPlaying}
        upComing={state.upComing}
        popular={state.popular}
        error={state.error}
        loading={state.loading}
    />
  );
}

export default MyPageContainer;