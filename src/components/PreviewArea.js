import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { connect, useDispatch } from "react-redux";
import { globalEventAction } from "../data/redux/actions/globalEventAction";
import { leftRotateAction } from "../data/redux/actions/motion_actions/leftRotateAction";
import { rightRotateAction } from "../data/redux/actions/motion_actions/rightRotateAction";
import CatSprite from "./CatSprite";
import "./PreviewArea.css";
function PreviewArea({
  globalEventState,
  leftRotate,
  rightRotate,
  looksAction,
}) {
  const [divMaxWidth, setDivMaxWidth] = useState("");
  const [rotate, setRotate] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setDivMaxWidth(ref.current.offsetWidth);
  }, []);

  const clearRedux = () => {
    dispatch(leftRotateAction(""));
    dispatch(rightRotateAction(""));
    dispatch(globalEventAction(""));
  };

  useEffect(() => {
    setRotate(leftRotate);
    clearRedux();
  }, [leftRotate]);
  useEffect(() => {
    setRotate(rightRotate);
    clearRedux();
  }, [rightRotate]);

  const showMessageInterval = (time) => {
    setShowMessage(true);
    if (time !== "") {
      const interval = setTimeout(() => {
        setShowMessage(false);
      }, Number(time) * 1000);

      return interval;
    }
  };
  useEffect(() => {
    showMessageInterval(looksAction.time);
  }, [looksAction]);

  return (
    <div className="w-full h-full">
      <Draggable
        bounds={{
          left: 0,
          bottom: window.innerHeight,
          top: 0,
          right: divMaxWidth - 50,
        }}
      >
        <div
          className="w-full flex-none h-full overflow-hidden  p-2 "
          ref={ref}
        >
          <div
            style={{
              transform: `translate(${globalEventState} , 0px) rotate(${
                rightRotate ? rightRotate : leftRotate
              }deg)`,
              width: 100,
              position: "relative",
            }}
          >
            {showMessage && (
              <div className="bubble">
                <p
                  style={{
                    color: "black",
                    fontSize: 12,
                  }}
                >
                  {looksAction.message}
                </p>
              </div>
            )}
            <CatSprite />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    globalEventState: state.globalEventReducer.globalEventState,
    leftRotate: state.leftRotateReducer.leftRotate,
    rightRotate: state.leftRotateReducer.rightRotate,
    looksAction: state.lookReducer.currentLookAction,
  };
};
export default connect(mapStateToProps)(PreviewArea);
