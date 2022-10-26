import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Looks_List, Motion_List } from "../data/list_data";
import { lookAction } from "../data/redux/actions/look_actions/lookAction";
import { motionAction } from "../data/redux/actions/motion_actions/motionAction";
import { getAllJoinedDiv } from "../service";

function MidArea({ globalClicked, motionPosition, looksAction }) {
  const delayFunction =
    (time = 500, func, i) =>
    (dispatch) => {
      const interval = setTimeout(() => {
        dispatch(func);
        clearTimeout(interval);
      }, time * i);
    };

  const ref = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  let currentIdArray = [];
  let moveX = 0;
  let moveY = 0;

  let glide = false;
  let input1;
  let input2;
  let costume = 1;
  let size = 1;
  let message = "";
  let rigthAngle = 0;
  let leftAngle = 0;
  let rigthAngleInput = 0;
  let leftAngleInput = 0;
  let setXInput = 0;
  let setYInput = 0;

  const getAllDraggedItemAndDispatch = (targetDiv) => {
    if (targetDiv.length !== 0)
      for (let i = 0; i < targetDiv.length; i++) {
        let currentId = targetDiv[i].id;
        currentIdArray.push(targetDiv[i].id);
        if (
          targetDiv[i].id === "goToRandomPosition" ||
          targetDiv[i].id === "switchCostume"
        ) {
          input1 = targetDiv[i].getElementsByTagName("select")[0].value;
        } else if (targetDiv[i].id === "turnRight") {
          rigthAngleInput =
            targetDiv[i]?.getElementsByTagName("input")[0]?.value;
        } else if (targetDiv[i].id === "turnLeft") {
          leftAngleInput =
            targetDiv[i]?.getElementsByTagName("input")[0]?.value;
        } else if (targetDiv[i].id === "setToX") {
          setXInput = targetDiv[i]?.getElementsByTagName("input")[0]?.value;
        } else if (targetDiv[i].id === "setToY") {
          setYInput = targetDiv[i]?.getElementsByTagName("input")[0]?.value;
        } else {
          input1 = targetDiv[i]?.getElementsByTagName("input")[0]?.value;
        }
        let inputCount = targetDiv[i].getElementsByTagName("input").length;

        if (currentIdArray.includes("turnRight")) {
          rigthAngle = Number(rigthAngleInput);
          console.log(rigthAngle);
        }
        if (currentIdArray.includes("turnLeft")) {
          leftAngle = Number(leftAngleInput);
          console.log(leftAngle, "sfkls");
        }
        if (currentIdArray.includes("moveForward")) {
          var radius = input1;
          var angle = motionPosition.angle + 90 + (rigthAngle - leftAngle);
          var x = radius * Math.sin((Math.PI * 2 * angle) / 360);
          var y = radius * Math.cos((Math.PI * 2 * angle) / 360);
          moveX =
            Number(motionPosition.x) + Math.round(Math.round(x * 100) / 100);
          moveY = motionPosition.y + Math.round(Math.round(y * 100) / 100);
        }
        if (currentIdArray.includes("changeX")) {
          moveX = motionPosition.x + Number(input1);
        }
        if (currentIdArray.includes("changeY")) {
          moveY = motionPosition.y + Number(input1);
        }
        if (currentIdArray.includes("setToX")) {
          moveX = Number(setXInput);
        }
        if (currentIdArray.includes("setToY")) {
          moveY = Number(setYInput);
        }

        if (currentIdArray.includes("changeSize")) {
          size = Number(looksAction.size) + Number(input1) / 100;
        }
        if (currentIdArray.includes("setSize")) {
          size = Number(input1) / 100;
        }

        if (
          currentIdArray.includes("sayMessageForXTime") ||
          currentIdArray.includes("thinkMessageForXTime") ||
          currentIdArray.includes("sayMessage") ||
          currentIdArray.includes("thinkMessage")
        ) {
          message = input1;
        }

        if (currentIdArray.includes("switchCostume")) {
          costume = Number(input1);
        }

        if (currentIdArray.includes("nextCostume")) {
          costume = looksAction.costume === 1 ? 2 : 1;
        }

        if (inputCount === 1) {
          Motion_List.map((motion, index) => {
            dispatch(
              delayFunction(
                1000,
                motionAction({
                  x: Number(moveX),
                  y: Number(moveY),
                  glide: glide,
                  angle: motionPosition.angle + (rigthAngle - leftAngle),
                }),
                i
              )
            );
          });

          Looks_List.map((motion, index) => {
            if (motion.id === currentId) {
              dispatch(
                delayFunction(
                  1000,
                  lookAction({
                    message: message,
                    time: "",
                    type: motion.type,
                    hide:
                      motion.action !== ""
                        ? motion.action === "show"
                          ? false
                          : true
                        : "",
                    costume: costume,
                    size: size,
                  }),
                  i
                )
              );
            }
          });
        } else {
          if (targetDiv[i].id === "goToRandomPosition") {
            input2 = targetDiv[i].getElementsByTagName("select")[0].value;
          } else {
            input2 = targetDiv[i]?.getElementsByTagName("input")[1]?.value;
          }
          if (currentIdArray.includes("goToXAndY")) {
            moveX = Number(input1);
            moveY = Number(input2);
          }

          if (currentIdArray.includes("glideToXAndY")) {
            moveX = Number(input1);
            moveY = Number(input2);
            glide = true;
          }

          if (currentIdArray.includes("goToRandomPosition")) {
            moveX = Number(Math.floor(Math.random() * 200));
            moveY = Number(Math.floor(Math.random() * 200));
            console.log("Move", moveX, moveY);
          }

          if (currentIdArray.includes("glideToRandomPosition")) {
            moveX = Math.floor(Math.random() * 200);
            moveY = Math.floor(Math.random() * 200);
            glide = true;
          }

          Motion_List.map((motion, index) => {
            if (motion.id === currentId) {
              dispatch(
                delayFunction(
                  1000,
                  motionAction({
                    x: Number(moveX),
                    y: Number(moveY),
                    glide: glide,
                    angle: motionPosition.angle + (rigthAngle - leftAngle),
                  }),
                  i
                )
              );
            }
          });
          Looks_List.map((motion, index) => {
            if (motion.id === currentId) {
              dispatch(
                delayFunction(
                  1000,
                  lookAction({
                    message: message,
                    time: input2,
                    type: motion.type,
                    hide:
                      motion.action !== ""
                        ? motion.action === "show"
                          ? false
                          : true
                        : "",
                    costume: costume,
                    size: size,
                  }),
                  i
                )
              );
            }
          });
        }
      }
  };

  useEffect(() => {
    const targetDiv = document.getElementById("drag-div").children;
    console.log(targetDiv, "targetDiv");
    getAllDraggedItemAndDispatch(targetDiv);
  }, [globalClicked]);
  return (
    <div
      className="flex-1 h-full overflow-auto w-full"
      ref={ref}
      onDragEnter={(e) => {
        e.preventDefault();
        return true;
      }}
      onDrop={(ev) => {
        var src = ev.dataTransfer.getData("Text");
        var sidebar = document.getElementById("side-bar");
        var totalWidth = sidebar.clientWidth + ref.current.offsetWidth;
        var nodeCopy = document.getElementById(src).cloneNode(true);
        nodeCopy.style.marginBottom = "0px";
        nodeCopy.style.left =
          ref.current.offsetWidth - (totalWidth - ev.clientX) + "px";
        nodeCopy.style.top = ev.clientY - 45 + "px";
        nodeCopy.style.position = "absolute";
        ev.target.appendChild(nodeCopy);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        return false;
      }}
      id="drag-div"
      style={{
        minWidth: 400,
        position: "relative",
      }}
      onClick={(e) => {
        console.log(e.target.parentElement, "Ddd");
        const targetDiv = document.getElementById("drag-div").children;

        e.preventDefault();
        e.stopPropagation();
        e.target.onClick = getAllDraggedItemAndDispatch(
          e.target.parentElement.children
        );
        console.log(
          getAllJoinedDiv(targetDiv, e.target.parentElement),
          "dddddd"
        );
        getAllDraggedItemAndDispatch(
          getAllJoinedDiv(targetDiv, e.target.parentElement)
        );
      }}
    ></div>
  );
}

const mapStateToProps = (state) => {
  return {
    globalClicked: state.globalReducer.globalClicked,
    motionPosition: state.motionReducer.position,
    looksAction: state.lookReducer.currentLookAction,
  };
};
export default connect(mapStateToProps)(MidArea);
