// 액션 타입 (take)
export const rootActions = {
  PURGE: "root/PURGE",
};

// 액션 생성 함수 (dispatch)
export const purge = () => ({
  type: rootActions.PURGE,
});
