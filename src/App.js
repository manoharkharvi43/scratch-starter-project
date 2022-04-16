import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import CodeLayout from "./layouts/code_layout";
import UploadSvg from "./utility/svgs/uploadSvg";
import UploadSprites from "./layouts/upload-sprites";
export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        {step === 0 ? (
          <>
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar /> <MidArea />
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
