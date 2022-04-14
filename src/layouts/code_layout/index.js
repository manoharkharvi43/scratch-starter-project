import React from "react";
import { useDispatch } from "react-redux";
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
function CodeLayout() {
  const dispatch = useDispatch();

  return (
    <div className="w-16 bg-slate-800 flex flex-col border border-slate-300 h-full">
      <div className="w-16 bg-slate-800 flex flex-col justify-between items-center h-1/4 min-h-28 pt-5 ">
        <div
          className="flex flex-col items-center mb-3 cursor-pointer"
          onClick={() => {
            dispatch(currentCodeAction(MOTION));
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
          className="flex flex-col items-center  mb-3 cursor-pointer"
          onClick={() => {
            dispatch(currentCodeAction(LOOKS));
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
          className="flex flex-col items-center  mb-3 cursor-pointer"
          onClick={() => {
            dispatch(currentCodeAction(CONTROLS));
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
          className="flex flex-col items-center  mb-3 cursor-pointer"
          onClick={() => {
            dispatch(currentCodeAction(EVENTS));
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

export default CodeLayout;
