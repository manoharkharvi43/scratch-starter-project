import { ROTATE_LEFT } from "../../constants/constants";

const initialState = {
  leftRotate: "-" + "0deg",
};
export const leftRotateReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ROTATE_LEFT:
      return { ...state, leftRotate: "-" + payload };

    default:
      return state;
  }
};
