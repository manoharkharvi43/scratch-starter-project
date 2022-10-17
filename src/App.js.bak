import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import CodeLayout from "./layouts/code_layout";
import UploadSvg from "./utility/svgs/uploadSvg";
import UploadSprites from "./layouts/upload-sprites";
import { TOP_NAV_COLOR } from "./utility/colorConstants";
import { useDispatch } from "react-redux";
import { globalPlayAction } from "./data/redux/actions/globalPlayAction";
export default function App() {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-100  font-sans">
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
          <img
            src={
              "https://scratch.mit.edu/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg"
            }
            style={{
              width: 20,
              height: 20,
              margin: "5px 0px 5px 0px",
            }}
            onClick={() => {
              dispatch(globalPlayAction());
            }}
          />
        </div>
      </div>
      <div className="h-screen overflow-hidden flex flex-row  ">
        {step === 0 ? (
          <>
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
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
