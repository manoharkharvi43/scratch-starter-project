import React, { useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import CodeLayout from "../layouts/code_layout";
import SvgBlocks from "../utility/svgs/SvgBlocks";
import SvgWithInputs from "../utility/SvgWithInputs";
import Icon from "./Icon";
import SvgComponent from "../utility/svgs/SVGcomp";
import { globalEventAction } from "../data/redux/actions/globalEventAction";
import MotionLayout from "../layouts/motion_layout/index";
import LooksLayout from "../layouts/looks_layout";
import { LOOKS, MOTION } from "../data/redux/constants/constants";
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

  return (
    <>
      <CodeLayout />
      <div className="w-60 flex-none h-full overflow-y-auto overflow-x-scroll flex flex-col items-start p-2 border-r border-gray-200 ">
        <div className="motion" ref={motion_ref}>
          Motion
        </div>
        <MotionLayout />

        <div className="motion" ref={looks_ref}>
          Looks
        </div>

        <LooksLayout />
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
