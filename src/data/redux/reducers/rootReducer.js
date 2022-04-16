import { combineReducers } from "redux";
import { currentCodeReducer } from "./currentCodeReducer";
import { globalEventReducer } from "./globalEventReducer";
import { leftRotateReducer } from "./motion_reducer/leftRotateReducer";
import { lookReducer } from "./look_reducer/lookReducer";
import { rightRotateReducer } from "./motion_reducer/rightRotateReducer";
import { moveXandYReducer } from "./motion_reducer/moveXandYReducer";
import { setXandYReducer } from "./motion_reducer/setXandYReducer";
export const rootReducer = combineReducers({
  currentCodeReducer,
  globalEventReducer,
  leftRotateReducer,
  lookReducer,
  rightRotateReducer,
  moveXandYReducer,
  setXandYReducer,
});
