import { ROTATE_RIGHT } from "../../constants/constants";

const initialState = {
  rightRotate: 0,
};
export const rightRotateReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ROTATE_RIGHT:
      return { ...state, rightRotate: payload + state?.rightRotate };

    default:
      return state;
  }
};
