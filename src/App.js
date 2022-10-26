import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import CodeLayout from "./layouts/code_layout";
import UploadSvg from "./utility/svgs/uploadSvg";
import UploadSprites from "./layouts/upload-sprites";
import { TOP_NAV_COLOR } from "./utility/colorConstants";
import { connect, useDispatch } from "react-redux";
import { globalAction } from "./data/redux/actions/globalAction";
function App({ isClicked }) {
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState(false);
  const dispatch = useDispatch();

  const showMessageInterval = (time) => {
    setBg(true);
    if (time !== "") {
      const interval = setTimeout(() => {
        setBg(false);
        dispatch(globalAction(false));
      }, 100);

      return interval;
    }
  };
  useEffect(() => {
    if (isClicked) showMessageInterval();
  }, [isClicked]);
  return (
    <div className="bg-blue-100  font-sans" style={{}}>
      <div
        style={{
          backgroundColor: TOP_NAV_COLOR,
        }}
        className="flex flex-row justify-end w-full h-11"
      >
        <div
          style={{
            width: "40%",
            minWidth: 350,
          }}
        >
          <div
            style={{
              backgroundColor: bg ? "rgba(77, 151, 255, 0.35)" : "transparent",
              padding: 5,
              borderRadius: 5,
              width: 30,
              height: 30,
              margin: "5px 0px 5px 0px",
            }}
            onMouseEnter={() => setBg(true)}
            onMouseLeave={() => setBg(false)}
          >
            <img
              src={
                "https://scratch.mit.edu/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg"
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(globalAction());
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-screen overflow-hidden flex flex-row">
        {step === 0 ? (
          <>
            <div className="flex-1 h-screen  flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar />
              <MidArea />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea
                onClickSelectSprite={() => {
                  setStep(1);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <UploadSprites />
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    looksAction: state.lookReducer.currentLookAction,
    isClicked: state.globalPlayReducer.isClicked,
  };
};
export default connect(mapStateToProps)(App);
