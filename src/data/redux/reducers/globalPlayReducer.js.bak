import { GLOBAL_PLAY_ACTION } from "../constants/constants";

const initialState = {
  isClicked: false,
};

export const globalPlayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBAL_PLAY_ACTION:
      return {
        ...state,
        isClicked: !state?.isClicked,
      };

    default:
      return state;
  }
};
