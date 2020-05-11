import React, { useState } from "react";

import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [ state, setState ] = useState({
    nowPlaying:null,
    upComing:null,
    popular:null,
    error:null,
    loading:null
  });

  return (
    <HomePresenter 
      nowPlaying={state.nowPlaying}
      upComing={state.upComing}
      popular={state.popular}
      error={state.error}
      loading={state.loading}
    />
  );
}

export default HomeContainer;