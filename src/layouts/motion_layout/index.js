import React from "react";
import { useDispatch } from "react-redux";
import { Motion_List } from "../../data/list_data/index";
import { globalEventAction } from "../../data/redux/actions/globalEventAction";
import { MOTION_COLOR } from "../../utility/colorConstants";
import MotionComps from "../../utility/motion_comps";
import SvgWithInputs from "../../utility/SvgWithInputs";
function MotionLayout() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <SvgWithInputs
        onClick={(val) => {
          dispatch(globalEventAction(Number(val)));
        }}
        leftTitle="move"
        rightTitle="steps"
      /> */}

      {Motion_List.map((data, index) => (
        <>
          <MotionComps
            styles={{
              backgroundColor: MOTION_COLOR,
            }}
            rightTitle={data.rightTitle}
            leftTitle={data.leftTitle}
            inputCount={data.inputCount}
            actions={data.action}
            onClick={(val1, val2) => {
              if (data.key === "setToX") {
                dispatch(
                  data.action({
                    x: Number(val1),
                  })
                );
              } else if (data.key === "setToY") {
                dispatch(
                  data.action({
                    y: Number(val1),
                  })
                );
              } else if (data.inputCount === 1)
                dispatch(data.action(Number(val1)));
              else
                dispatch(
                  data.action({
                    x: Number(val1),
                    y: Number(val2),
                  })
                );
            }}
            id={index + data.leftTitle + data.rightTitle}
          />
        </>
      ))}
    </>
  );
}

export default MotionLayout;
