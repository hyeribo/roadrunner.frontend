import { userActions } from "./userActions";
import { rootActions } from "@modules/rootActions";

// ===== 초기 상태값
export const initialState = {
  mode: "runner",
};

// ===== 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, ...action.payload };
    case userActions.SWITCH_MODE:
      return { ...state, mode: action.payload };
    case rootActions.PURGE:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
