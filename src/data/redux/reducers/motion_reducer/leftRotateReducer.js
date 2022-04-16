import { ROTATE_LEFT } from "../../constants/constants";

const initialState = {
  leftRotate: 0,
};
export const leftRotateReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ROTATE_LEFT:
      return {
        ...state,
        leftRotate: payload + state?.leftRotate,
      };
    //+ state?.leftRotate

    default:
      return state;
  }
};
