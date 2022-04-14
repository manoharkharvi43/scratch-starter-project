import { GLOBAL_EVENT } from "../constants/constants";

const initialState = {
  globalEventState: "",
};

export const globalEventReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GLOBAL_EVENT:
      return {
        ...state,
        globalEventState: payload,
      };

    default:
      return state;
  }
};
