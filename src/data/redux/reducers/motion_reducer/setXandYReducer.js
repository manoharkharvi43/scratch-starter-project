import { SETXANDY } from "../../constants/constants";

const initialState = {
  position: {
    x: 0,
    y: 0,
  },
};
export const setXandYReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SETXANDY:
      return {
        ...state,
        position: {
          x: payload.x,
          y: payload.y,
        },
      };
    default:
      return state;
  }
};
