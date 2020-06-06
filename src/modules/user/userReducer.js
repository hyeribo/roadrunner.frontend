import { userActions } from "./userActions";

// ===== 초기 상태값
export const initialState = {
  mode: "runner",
  id: 1,
  name: "신부르미",
  email: "sin123@gmail.com",
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
