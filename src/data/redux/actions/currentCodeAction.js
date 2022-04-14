import { CURRENT_CODE } from "../constants/constants";

export const currentCodeAction = (payload) => {
  return {
    type: CURRENT_CODE,
    payload,
  };
};
