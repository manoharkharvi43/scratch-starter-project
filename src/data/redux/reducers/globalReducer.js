import { GLOBAL_ACTION } from "../constants/constants";

const initialState = {
  globalClicked: false,
};

export const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBAL_ACTION:
      return {
        ...state,
        globalClicked: state?.globalClicked ? false :  true,
      };
    default:
      return state;
  }
};
