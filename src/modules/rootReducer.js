import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import langReducer from "./lang/langReducer";

export default combineReducers({
  user: userReducer,
  lang: langReducer,
});
