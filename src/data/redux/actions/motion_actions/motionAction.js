import { MOTION_MAIN } from "../../constants/constants";

export const motionAction = (payload) => {
  return {
    type: MOTION_MAIN,
    payload,
  };
};
