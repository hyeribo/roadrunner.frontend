import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import langReducer from "./lang/langReducer";
import filterReducer from "./filter/filterReducer";

export default combineReducers({
  user: userReducer,
  lang: langReducer,
  filter: filterReducer,
});
