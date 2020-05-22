import { userActions } from "./userActions";

// ===== 초기 상태값
export const initialState = {
  mode: "runner",
  name: "user",
  id: 1,
  grade: "good",
};

// ===== 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
