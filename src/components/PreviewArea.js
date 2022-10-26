import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { connect, useDispatch } from "react-redux";
import { globalEventAction } from "../data/redux/actions/globalEventAction";
import { leftRotateAction } from "../data/redux/actions/motion_actions/leftRotateAction";
import { rightRotateAction } from "../data/redux/actions/motion_actions/rightRotateAction";
import CatSprite from "./CatSprite";
import CatSpriteSecond from "./CatSpriteSecond";
import "./PreviewArea.css";
// import { ReactComponent as UploadSvg } from "../assets/svg/file-upload.svg";
import UploadSvg from "../utility/svgs/uploadSvg";
function PreviewArea({
  globalEventState,
  leftRotate,
  rightRotate,
  looksAction,
  onClickSelectSprite,
  moveXandY,
  setXandY,
  motionPosition,
}) {
  const [divMaxWidth, setDivMaxWidth] = useState("");
  const [rotate, setRotate] = useState(0);
  const [bgColor, setBgColor] = useState("#3373cc");
  const [showMessage, setShowMessage] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [position, setPosition] = useState({
    x: motionPosition.x,
    y: motionPosition.y,
    angle: motionPosition.angle,
    glide: motionPosition.glide,
  });
  const [currentObjectPosition, setCurrentObjectPosition] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);
  const dispatch = useDispatch();

  const updateCurrentObjectPosition = () => {};
  useEffect(() => {
    setDivMaxWidth(ref.current.offsetWidth);
  }, []);

  const clearRedux = () => {
    dispatch(leftRotateAction(0));
    dispatch(rightRotateAction(0));
    dispatch(globalEventAction());
  };

  // useEffect(() => {
  //   setRotate("-" + leftRotate);
  // }, [leftRotate]);

  // useEffect(() => {
  //   setRotate(rightRotate);
  // }, [rightRotate]);

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
    if (looksAction.message !== "") showMessageInterval(looksAction.time);
  }, [looksAction]);

  useEffect(() => {
    setPosition({
      x: motionPosition.x,
      y: motionPosition.y,
      angle: motionPosition.angle,
      glide: motionPosition.glide,
    });
  }, [motionPosition]);

  return (
    <div className="w-full h-full">
      <div
        className="flex-none overflow-hidden p-2"
        style={{
          width: "100%",
          height: "100vh",
        }}
        ref={ref}
      >
        {(!looksAction.hide || looksAction.hide === "") && (
          // <div>
          <Draggable
            bounds={{
              left: 0,
              bottom: window.innerHeight + 50,
              top: 0,
              right: divMaxWidth - 50,
            }}
          >
            <div
              style={{
                width: 120,
              }}
            >
              <div
                style={{
                  transform: `translate(${position.x}px , ${position.y}px) rotate(${position.angle}deg) scale(${looksAction.size})`,
                  transition: position.glide ? "transform 1s" : "none",
                  width: 100,
                  position: "relative",
                  left: setXandY.x,
                  top: setXandY.y,
                }}
              >
                {showMessage && looksAction.hide === "" && (
                  <div
                    className={
                      looksAction.type === "message" ? "bubble" : "thinking"
                    }
                  >
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
                {looksAction.costume === 1 ? (
                  <CatSprite />
                ) : (
                  <CatSpriteSecond />
                )}
              </div>
            </div>
          </Draggable>
          // </div>
        )}
      </div>

      <div
        style={{
          backgroundColor: bgColor,
        }}
        className="w-10	h-10 flex flex-row justify-center items-center absolute right-10 bg-sky-500 bottom-4 rounded-full cursor-pointer"
        id="upload-container"
        onMouseEnter={(e) => {
          setShowUpload(true);
          setBgColor("#0fbd8c");
        }}
        onMouseLeave={(e) => {
          setShowUpload(false);
          setBgColor("#3373cc");
        }}
        onClick={() => {
          onClickSelectSprite();
        }}
      >
        <p
          style={{
            fontSize: 10,
            color: "white",
          }}
        >
          upload
        </p>
        {showUpload && (
          <div
            className="absolute bg-sky-500 bottom-11 cursor-pointer w-10 h-10 flex justify-center  "
            id="upload-options"
            onClick={() => {}}
          >
            <div id="single-options">
              <UploadSvg />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    globalEventState: state.globalEventReducer.globalEventState,
    leftRotate: state.leftRotateReducer.leftRotate,
    rightRotate: state.rightRotateReducer.rightRotate,
    looksAction: state.lookReducer.currentLookAction,
    moveXandY: state.moveXandYReducer.position,
    setXandY: state.setXandYReducer.position,
    randomPosition: state.moveToRandomPositionReducer.position,
    motionPosition: state.motionReducer.position,
  };
};
export default connect(mapStateToProps)(PreviewArea);
