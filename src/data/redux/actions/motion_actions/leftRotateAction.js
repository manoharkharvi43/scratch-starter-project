import { ROTATE_LEFT } from "../../constants/constants";

export const leftRotateAction = (payload) => {
  console.log(payload);
  return {
    type: ROTATE_LEFT,
    payload,
  };
};
