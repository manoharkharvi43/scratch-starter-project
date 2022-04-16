import { ROTATE_RIGHT } from "../../constants/constants";

export const rightRotateAction = (payload) => {
  return {
    type: ROTATE_RIGHT,
    payload,
  };
};
