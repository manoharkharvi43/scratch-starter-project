import { CURRENT_LOOK_ACTION } from "../../constants/constants";

const initialState = {
  currentLookAction: {},
};
export const lookReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CURRENT_LOOK_ACTION:
      return {
        ...state,
        currentLookAction: payload,
      };

    default:
      return state;
  }
};
