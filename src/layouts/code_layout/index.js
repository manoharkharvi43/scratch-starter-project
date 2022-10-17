import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  CONTROL_COLOR,
  EVENT_COLOR,
  LOOKS_COLOR,
  MOTION_COLOR,
} from "../../utility/colorConstants";
import { currentCodeAction } from "../../data/redux/actions/currentCodeAction";
import {
  CONTROLS,
  EVENTS,
  LOOKS,
  MOTION,
} from "../../data/redux/constants/constants";
function CodeLayout({ currentCode }) {
  const dispatch = useDispatch();

  console.log(currentCode, "currentCode");
  return (
    <div className="w-16 bg-slate-800 flex flex-col border border-slate-300 h-full">
      <div className="w-16 bg-slate-800 flex flex-col justify-between items-center h-1/4 min-h-28 pt-5 ">
        <div
          className="flex flex-col items-center mb-3 cursor-pointer w-full  py-2"
          onClick={() => {
            dispatch(currentCodeAction(MOTION));
            console.log("ckckkc");
          }}
          style={{
            backgroundColor: currentCode === MOTION ? "#e9eef2" : "transparent",
            width: "100%",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: MOTION_COLOR,
              borderRadius: "50%",
            }}
          ></div>
          <p className="text-xs text-center">Motion</p>
        </div>
        <div
          className="flex flex-col items-center  mb-3 cursor-pointer w-full  py-2"
          onClick={() => {
            dispatch(currentCodeAction(LOOKS));
          }}
          style={{
            backgroundColor: currentCode === LOOKS ? "#e9eef2" : "transparent",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: LOOKS_COLOR,
              borderRadius: "50%",
            }}
          ></div>
          <p className="text-xs">Looks</p>
        </div>
        <div
          className="flex flex-col items-center  mb-3 cursor-pointer w-full  py-2"
          onClick={() => {
            dispatch(currentCodeAction(CONTROLS));
          }}
          style={{
            backgroundColor:
              currentCode === CONTROLS ? "#e9eef2" : "transparent",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: CONTROL_COLOR,
              borderRadius: "50%",
            }}
          ></div>
          <p className="text-xs">Control</p>
        </div>
        <div
          className="flex flex-col items-center  mb-3 cursor-pointer w-full  py-2"
          onClick={() => {
            dispatch(currentCodeAction(EVENTS));
          }}
          style={{
            backgroundColor: currentCode === EVENTS ? "#e9eef2" : "transparent",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: EVENT_COLOR,
              borderRadius: "50%",
            }}
          ></div>
          <p className="text-xs">Events</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentCode: state.currentCodeReducer.currentCode,
  };
};

export default connect(mapStateToProps)(CodeLayout);
