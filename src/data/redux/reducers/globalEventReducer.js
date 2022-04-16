import { GLOBAL_EVENT } from "../constants/constants";

const initialState = {
  globalEventState: 0,
};

export const globalEventReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GLOBAL_EVENT:
      return {
        ...state,
        globalEventState: payload + state?.globalEventState,
      };

    default:
      return state;
  }
};
