import { ROTATE_RIGHT } from "../../constants/constants";

export const rightRotateAction = (payload) => {
  console.log(payload);

  return {
    type: ROTATE_RIGHT,
    payload,
  };
};
