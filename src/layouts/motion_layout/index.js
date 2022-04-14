import React from "react";
import { useDispatch } from "react-redux";
import { globalEventAction } from "../../data/redux/actions/globalEventAction";
import { MOTION_COLOR } from "../../utility/colorConstants";
import MotionComps from "../../utility/motion_comps";
import SvgWithInputs from "../../utility/SvgWithInputs";
import { Motion_List } from "../../data/list_data/index";
function MotionLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <SvgWithInputs
        onClick={(val) => {
          dispatch(globalEventAction(`${val}px`));
        }}
        leftTitle="move"
        rightTitle="steps"
      />

      {Motion_List.map((data, index) => (
        <>
          <MotionComps
            styles={{
              backgroundColor: MOTION_COLOR,
            }}
            rightTitle={data.rightTitle}
            leftTitle={data.leftTitle}
            inputCount={data.inputCount}
            onClick={(val1, val2) => {
              if (data.inputCount === 1) dispatch(data.action(val1));
              else dispatch(data.action(val1, val2));
            }}
          />
        </>
      ))}
    </>
  );
}

export default MotionLayout;
