import { CURRENT_CODE, MOTION } from "../constants/constants";

const initialState = {
  currentCode: MOTION,
};
export const currentCodeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_CODE:
      return {
        ...state,
        currentCode: payload,
      };

    default:
      return state;
  }
};
