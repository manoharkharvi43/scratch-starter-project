import { MOVEXANDY } from "../../constants/constants";

const initialState = {
  position: {
    x: 0,
    y: 0,
  },
};
export const moveXandYReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVEXANDY:
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
