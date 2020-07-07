// 액션 타입 (take)
export const filterActions = {
  TOGGLE_FILTER: "lang/TOGGLE_FILTER",
  CHANGE_FILTER: "lang/CHANGE_FILTER",
};

// 액션 생성 함수 (dispatch)
export const toggleFilter = () => ({
  type: filterActions.TOGGLE_FILTER,
});

export const changeFilter = (payload) => ({
  type: filterActions.CHANGE_FILTER,
  payload,
});
