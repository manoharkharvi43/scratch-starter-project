import { MOVERANDOMPOSITION } from "../../constants/constants";

export const moveToRandomPosition = (payload) => {
  console.log("Patloaf", payload);
  return {
    type: MOVERANDOMPOSITION,
    payload,
  };
};
