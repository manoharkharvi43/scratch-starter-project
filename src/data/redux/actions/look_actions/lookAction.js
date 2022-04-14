import { CURRENT_LOOK_ACTION } from "../../constants/constants";

export const lookAction = (payload) => {
  return {
    type: CURRENT_LOOK_ACTION,
    payload,
  };
};
