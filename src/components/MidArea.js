import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Looks_List, Motion_List } from "../data/list_data";
import { lookAction } from "../data/redux/actions/look_actions/lookAction";
import { eventDispatcher } from "../utility/eventDispatcherForGlobalAction";

function MidArea({ isClicked }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const getAllDraggedItemAndDispatch = (e) => {
    console.log("called");
    const divEle = document.getElementById("drag-div").children;
    for (let i = 0; i < divEle.length; i++) {
      let currentDiv = divEle[i].getAttribute("actionType");
      let currentId = divEle[i].id;

      let inputCount = divEle[i].getElementsByTagName("input").length;
      let input1 = divEle[i].getElementsByTagName("input")[0].value;
      if (inputCount === 1) {
        Motion_List.map((motion, index) => {
          if (motion.id === currentId) {
            dispatch(
              eventDispatcher(
                input1,
                motion.action,
                motion.id,
                motion.inputCount
              )
            );
          }
        });

        Looks_List.map((motion, index) => {
          console.log(motion.id === currentId);
          if (motion.id === currentId) {
            dispatch(
              lookAction({
                message: input1,
                time: "",
                type: motion.type,
                hide:
                  motion.action !== ""
                    ? motion.action === "show"
                      ? false
                      : true
                    : "",
              })
            );
          }
        });
      } else {
        let input2 = divEle[i].getElementsByTagName("input")[1].value;
        Motion_List.map((motion, index) => {
          if (motion.id === currentId) {
            dispatch(
              eventDispatcher(
                input1,
                motion.action,
                motion.id,
                motion.inputCount,
                input2
              )
            );
          }
        });
        Looks_List.map((motion, index) => {
          console.log(motion.id === currentId);
          if (motion.id === currentId) {
            dispatch(
              lookAction({
                message: input1,
                time: input2,
                type: motion.type,
                hide:
                  motion.action !== ""
                    ? motion.action === "show"
                      ? false
                      : true
                    : "",
              })
            );
          }
        });
      }
    }
  };

  useEffect(() => {
    getAllDraggedItemAndDispatch();
  }, [isClicked]);
  return (
    <div
      className="flex-1 h-full overflow-auto w-full"
      ref={ref}
      onDragEnter={(e) => {
        e.preventDefault();
        console.log(e, "eeeee=>");
        return true;
      }}
      onDrop={(ev) => {
        var src = ev.dataTransfer.getData("Text");
        var nodeCopy = document.getElementById(src).cloneNode(true);
        ev.target.appendChild(nodeCopy);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        return false;
      }}
      id="drag-div"
      style={{}}
    ></div>
  );
}

const mapStateToProps = (state) => {
  return {
    isClicked: state.globalPlayReducer.isClicked,
  };
};
export default connect(mapStateToProps)(MidArea);
