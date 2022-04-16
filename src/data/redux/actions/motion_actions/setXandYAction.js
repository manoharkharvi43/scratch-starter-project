import { SETXANDY } from "../../constants/constants";

export const setXandYAction = (payload) => {
  return {
    type: SETXANDY,
    payload,
  };
};
