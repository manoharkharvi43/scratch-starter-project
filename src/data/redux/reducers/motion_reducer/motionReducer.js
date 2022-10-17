import { MOTION_MAIN, MOVEXANDY } from "../../constants/constants";

const initialState = {
  position: {
    x: 0,
    y: 0,
    glide: false,
    angle: 0,
  },
};
export const motionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOTION_MAIN:
      return {
        ...state,
        position: {
          x: payload.x,
          y: payload.y,
          glide: payload.glide,
          angle: payload.angle,
        },
      };
    default:
      return state;
  }
};
