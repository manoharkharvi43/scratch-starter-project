import React from "react";
import { useDispatch } from "react-redux";
import { Looks_List } from "../../data/list_data";
import LooksSvgComps from "../../utility/looks_comps/LooksSvgComponent";
import { lookAction } from "../../data/redux/actions/look_actions/lookAction";
function LooksLayout() {
  const dispatch = useDispatch();
  return (
    <div>
      {Looks_List.map((data, index) => (
        <>
          <LooksSvgComps
            inputCount={data.inputCount}
            leftTitle={data.leftTitle}
            rightTitle={data.rightTitle}
            onClick={(message, time = "") => {
              dispatch(
                lookAction({
                  message: message,
                  time: time,
                  type: data.type,
                  hide:
                    data.action !== ""
                      ? data.action === "show"
                        ? false
                        : true
                      : "",
                })
              );
            }}
            lastTitle={data.lastTitle}
            id={index + data.leftTitle + data.rightTitle}
          />
        </>
      ))}
    </div>
  );
}

export default LooksLayout;
