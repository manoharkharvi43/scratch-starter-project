import { GLOBAL_PLAY_ACTION } from "../constants/constants";

export const globalPlayAction = (payload) => {
  return {
    type: GLOBAL_PLAY_ACTION,
    payload,
  };
};
