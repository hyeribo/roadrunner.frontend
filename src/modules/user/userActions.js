// 액션 타입 (take)
export const userActions = {
  SET_USER: "user/SET_USER",
  SWITCH_MODE: "user/SWITCH_MODE",
  UPDATE_USER: "user/UPDATE_USER",
};

// 액션 생성 함수 (dispatch)
export const updateUser = (payload) => ({
  type: userSagaActions.UPDATE_USER,
  payload,
});
