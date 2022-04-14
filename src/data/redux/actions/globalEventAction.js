import { GLOBAL_EVENT } from "../constants/constants";

export const globalEventAction = (payload) => {
  return {
    type: GLOBAL_EVENT,
    payload: payload,
  };
};
