import { combineReducers } from "redux";
import { currentCodeReducer } from "./currentCodeReducer";
import { globalEventReducer } from "./globalEventReducer";
import { leftRotateReducer } from "./motion_reducer/leftRotateReducer";
import { lookReducer } from "./look_reducer/lookReducer";
export const rootReducer = combineReducers({
  currentCodeReducer,
  globalEventReducer,
  leftRotateReducer,
  lookReducer,
});
