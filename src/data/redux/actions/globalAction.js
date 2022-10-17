import { GLOBAL_ACTION } from "../constants/constants";

export const globalAction = (payload) => {
  return {
    type: GLOBAL_ACTION,
    payload,
  };
};