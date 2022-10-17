import React from "react";
import { connect, useDispatch } from "react-redux";
import { Looks_List } from "../../data/list_data";
import LooksSvgComps from "../../utility/looks_comps/LooksSvgComponent";
import { lookAction } from "../../data/redux/actions/look_actions/lookAction";
import { globalPlayAction } from "../../data/redux/actions/globalPlayAction";
function LooksLayout({ looksAction }) {
  const dispatch = useDispatch();
  return (
    <div>
      {Looks_List.map((data, index) => (
        <>
          <LooksSvgComps
            inputCount={data.inputCount}
            value={data.value}
            leftTitle={data.leftTitle}
            rightTitle={data.rightTitle}
            isSelectRequired={data.isSelectRequired}
            options={data.options}
            onClick={(message = "", time = "", costume) => {
              dispatch(globalPlayAction(true));
              if (data.key === "setSize") {
                dispatch(
                  lookAction({
                    costume: looksAction.costume,
                    size: Number(message) / 100,
                    message: looksAction.message,
                    time: time,
                    type: data.type,
                    hide: false,
                  })
                );
              } else if (data.key === "changeSize") {
                dispatch(
                  lookAction({
                    costume: looksAction.costume,
                    size: looksAction.size + Number(message) / 100,
                    message: looksAction.message,
                    time: time,
                    type: data.type,
                    hide: false,
                  })
                );
              } else if (data.key === "nextCostume") {
                dispatch(
                  lookAction({
                    costume: looksAction.costume === 1 ? 2 : 1,
                    size: looksAction.size,
                    message: message,
                    time: time,
                    type: data.type,
                    hide: false,
                  })
                );
              } else if (data.key === "switchCostume") {
                dispatch(
                  lookAction({
                    costume: costume,
                    size: looksAction.size,
                    message: message,
                    time: time,
                    type: data.type,
                    hide: false,
                  })
                );
              } else {
                dispatch(
                  lookAction({
                    costume: looksAction.costume,
                    size: looksAction.size,
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
              }
            }}
            lastTitle={data.lastTitle}
            id={data.id}
            key={data.id}
          />
        </>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    looksAction: state.lookReducer.currentLookAction,
  };
};
export default connect(mapStateToProps)(LooksLayout);
