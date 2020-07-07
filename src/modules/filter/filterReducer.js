import { filterActions } from "./filterActions";

// ===== 초기 상태값
export const initialState = {
  visible: false,
  status: ["MATCHING", "MATCHED"],
  priority: ["FREE", "NORMAL", "URGENT"],
  gender: ["F", "M", "O"],
};

// ===== 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActions.TOGGLE_FILTER:
      return {
        ...state,
        visible: !state.visible,
      };
    case filterActions.CHANGE_FILTER:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
