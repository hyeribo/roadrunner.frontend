// 액션 타입 (take)
export const userActions = {
  SET_USER: "user/SET_USER",
  SWITCH_MODE: "user/SWITCH_MODE",
};

// 액션 생성 함수 (dispatch)
export const setUser = (payload) => ({
  type: userActions.SET_USER,
  payload,
});

export const switchMode = (payload) => ({
  type: userActions.SWITCH_MODE,
  payload,
});
