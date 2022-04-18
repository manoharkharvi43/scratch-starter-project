import React, { useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { LOOKS, MOTION } from "../data/redux/constants/constants";
import CodeLayout from "../layouts/code_layout";
import LooksLayout from "../layouts/looks_layout";
import MotionLayout from "../layouts/motion_layout/index";
import MidArea from "./MidArea";
function Sidebar({ currentCode }) {
  const motion_ref = useRef();
  const looks_ref = useRef();
  const control_ref = useRef();
  const event_ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCode === MOTION) {
      motion_ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (currentCode === LOOKS) {
      looks_ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentCode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 20,
          position: "relative",
        }}
      >
        <CodeLayout />
        <div
          className="flex flex-row"
          // onDragOver={(e) => {
          //   console.log(e, "->");
          //   e.dataTransfer.setData("text", e.target.id);
          // }}
          // id="drag-div"
        >
          <div className="w-60 flex-none h-full  flex flex-col items-start p-2 border-r border-gray-200 ">
            <div className="motion" ref={motion_ref}>
              Motion
            </div>
            <MotionLayout />
            <div className="motion" ref={looks_ref}>
              Looks
            </div>

            <LooksLayout />
          </div>
        </div>
      </div>
      {/* <div className="flex-1 h-full overflow-auto">{"mid area"} </div>; */}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    currentCode: state.currentCodeReducer.currentCode,
  };
};
export default connect(mapStateToProps)(Sidebar);
