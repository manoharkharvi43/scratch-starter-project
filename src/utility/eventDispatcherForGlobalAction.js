export const eventDispatcher =
  (val1, action, key, inputCount, val2 = "") =>
  (dispatch) => {
    if (key === "setToX") {
      dispatch(
        action({
          x: Number(val1),
        })
      );
    } else if (key === "setToY") {
      dispatch(
        action({
          y: Number(val1),
        })
      );
    } else if (inputCount === 1) dispatch(action(Number(val1)));
    else
      dispatch(
        action({
          x: Number(val1),
          y: Number(val2),
        })
      );
  };
