import React from "react";
import { connect, useDispatch } from "react-redux";
import { Motion_List } from "../../data/list_data/index";
import { globalPlayAction } from "../../data/redux/actions/globalPlayAction";
import { motionAction } from "../../data/redux/actions/motion_actions/motionAction";
import { moveToRandomPosition } from "../../data/redux/actions/motion_actions/moveToRandomPositon";
import { moveXandYAction } from "../../data/redux/actions/motion_actions/moveXandYAction";
import { MOTION_COLOR } from "../../utility/colorConstants";
import MotionComps from "../../utility/motion_comps";
function MotionLayout({ motionPosition }) {
  const dispatch = useDispatch();

  return (
    <>
      {Motion_List.map((data, index) => (
        <>
          <MotionComps
            styles={{
              backgroundColor: MOTION_COLOR,
              marginBottom: 10,
            }}
            rightTitle={data.rightTitle}
            xAxisRequired={data.xAxisRequired}
            yAxisRequired={data.yAxisRequired}
            isSelectRequired={data.isSelectRequired}
            options={data.option}
            leftTitle={data.leftTitle}
            inputCount={data.inputCount}
            actions={data.action}
            onClick={(val1, val2) => {
              dispatch(globalPlayAction(true));
              if (data.key === "moveForward") {
                var radius = val1;
                var angle = motionPosition.angle + 90;
                var x = radius * Math.sin((Math.PI * 2 * angle) / 360);
                var y = radius * Math.cos((Math.PI * 2 * angle) / 360);
                dispatch(
                  motionAction({
                    x: motionPosition.x + Math.round(Math.round(x * 100) / 100),
                    y: motionPosition.y + Math.round(Math.round(y * 100) / 100),
                    glide: data.glide ? true : false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "goToXAndY") {
                dispatch(
                  motionAction({
                    x: Number(val1),
                    y: Number(val2),
                    glide: data.glide ? true : false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "goToRandomPosition") {
                dispatch(
                  motionAction({
                    x: Math.floor(Math.random() * 200),
                    y: Math.floor(Math.random() * 200),
                    glide: data.glide ? true : false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "setToX") {
                dispatch(
                  motionAction({
                    x: Number(val1),
                    y: motionPosition.y,
                    glide: false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "setToY") {
                dispatch(
                  motionAction({
                    y: Number(val1),
                    x: motionPosition.x,
                    glide: false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "turnLeft") {
                dispatch(
                  motionAction({
                    y: motionPosition.y,
                    x: motionPosition.x,
                    glide: false,
                    angle: motionPosition.angle - Number(val1),
                  })
                );
              } else if (data.key === "turnRight") {
                dispatch(
                  motionAction({
                    y: motionPosition.y,
                    x: motionPosition.x,
                    glide: false,
                    angle: motionPosition.angle + Number(val1),
                  })
                );
              } else if (data.key === "changeY") {
                dispatch(
                  motionAction({
                    y: motionPosition.y + Number(val1),
                    x: motionPosition.x,
                    glide: false,
                    angle: motionPosition.angle,
                  })
                );
              } else if (data.key === "changeX") {
                dispatch(
                  motionAction({
                    y: motionPosition.y,
                    x: motionPosition.x + Number(val1),
                    glide: false,
                    angle: motionPosition.angle,
                  })
                );
              } else {
                dispatch(
                  data.action({
                    x: Number(val1),
                    y: Number(val2),
                    glide: false,
                  })
                );
              }
            }}
            id={data.id}
          />
        </>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    motionPosition: state.motionReducer.position,
  };
};

export default connect(mapStateToProps)(MotionLayout);
