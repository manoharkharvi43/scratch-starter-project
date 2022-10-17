import React from "react";
import { connect, useDispatch } from "react-redux";
import { Events_List } from "../../data/list_data";
import { globalPlayAction } from "../../data/redux/actions/globalPlayAction";
function EventsLayout({ looksAction }) {
  const dispatch = useDispatch();
  return (
    <div>
      {Events_List.map((data, index) => (
        <>
          <Events_comps
            inputCount={data.inputCount}
            value={data.value}
            leftTitle={data.leftTitle}
            rightTitle={data.rightTitle}
            isSelectRequired={data.isSelectRequired}
            options={data.option}
            onClick={() => {
              dispatch(globalPlayAction(true));
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
export default connect(mapStateToProps)(EventsLayout);
