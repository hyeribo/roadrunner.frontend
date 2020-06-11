import { langActions } from "./langActions";
import constants from "@config/constants";
import { changeI18nLanguage } from "@config/i18n";

// ===== 초기 상태값
export const initialState =
  localStorage.getItem(constants.LOCAL_LANG_KEY) || "ko";

// ===== 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case langActions.SET_LANGUAGE:
      changeI18nLanguage(action.payload); // change i18n
      return action.payload; // change reducer
    default:
      return state;
  }
};

export default reducer;
