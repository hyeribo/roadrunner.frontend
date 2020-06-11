// 액션 타입 (take)
export const langActions = {
  SET_LANGUAGE: "lang/SET_LANG",
};

// 액션 생성 함수 (dispatch)
export const setLanguage = (payload) => ({
  type: langActions.SET_LANGUAGE,
  payload,
});
