import { MOVEXANDY } from "../../constants/constants";

export const moveXandYAction = (payload) => {
  return {
    type: MOVEXANDY,
    payload,
  };
};
