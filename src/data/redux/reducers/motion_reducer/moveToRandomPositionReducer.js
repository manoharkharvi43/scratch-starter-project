import { MOVERANDOMPOSITION } from "../../constants/constants";

const initialState = {
  position: {
    x: 0,
    y: 0,
    glide: false,
  },
};
export const moveToRandomPositionReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case MOVERANDOMPOSITION:
      return {
        ...state,
        position: {
          x: payload.x,
          y: payload.y,
          glide: payload.glide,
        },
      };
    default:
      return state;
  }
};
