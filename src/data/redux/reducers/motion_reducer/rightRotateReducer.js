import { ROTATE_RIGHT } from "../../constants/constants";

const initialState = {
  rightRotate: "0deg",
};
export const rightRotateReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ROTATE_RIGHT:
      return { ...state, rightRotate: payload };

    default:
      return state;
  }
};
