import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { EVENT_COLOR, MOTION_COLOR } from "../colorConstants";

function EventComps({
  styles,
  leftTitle,
  rightTitle,
  inputCount,
  onClick,
  id,
  action,
  actionType,
  isSelectRequired,
  options,
  xAxisRequired,
  yAxisRequired,
  glide = false,
  motionPosition,
}) {
  const [inputValue1, setInputValue1] = useState("10");
  const [inputValue2, setInputValue2] = useState("10");
  const [xAxis, setXAxis] = useState(motionPosition.x);
  const [yAxis, setYAxis] = useState(motionPosition.y);
  const [visible, setVisible] = useState(false);

  function dragStart(ev) {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
  }

  useEffect(() => {
    setXAxis(motionPosition.x);
    setYAxis(motionPosition.y);
  }, [motionPosition]);

  return (
    <>
      {/* <Draggable
        onStart={() => {
          setVisible(true);
        }}
        onStop={() => {
          // setVisible(false);
        }}
      > */}
      <div
        draggable={true}
        style={{
          minWidth: 120,
          height: 30,
          padding: "0px 5px 0px 5px",
          cursor: "grab",
          maxWidth: 200,
          backgroundColor: EVENT_COLOR,
          ...styles,
        }}
        className="flex flex-row items-center  justify-between mb-2 "
        onClick={() => {
          if (inputCount === 1) onClick(inputValue1);
          else onClick(inputValue1, inputValue2);
        }}
        onDragStart={(e) => dragStart(e)}
        omDragOver={() => {
          setVisible(true);
        }}
        id={`${id}`}
        key={`${id}`}
        actionType={actionType}
      >
        <p
          style={{
            fontSize: 10,
            color: "white",
          }}
        >
          {leftTitle}
        </p>

        {isSelectRequired && (
          <select
            options={options}
            onChange={(e) => {
              setInputValue1(e.target.value);
            }}
            style={{
              backgroundColor: EVENT_COLOR,
              border: "1px solid gray",
              borderRadius: "10px",
              color: "white",
              fontSize: "12px",
              marginLeft: "5px",
              zIndex: 10,
            }}
          >
            {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={index}
                    style={{
                      color: "white",
                      backgroundColor: "white",
                      fontSize: 12,
                    }}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                );
              })}
          </select>
        )}

        <p
          style={{
            fontSize: 10,
            color: "white",
          }}
        >
          {rightTitle}
        </p>
      </div>
      {/* </Draggable> */}
      {visible && (
        <div
          style={{
            minWidth: 120,
            height: 30,
            padding: "0px 5px 0px 5px",
            cursor: "grab",
            ...styles,
          }}
          className="flex flex-row items-center  justify-between mb-2 "
          onClick={() => {
            if (inputCount === 1) onClick(inputValue1);
            else onClick(inputValue1, inputValue2);
          }}
        >
          <p
            style={{
              fontSize: 10,
              color: "white",
            }}
          >
            {leftTitle}
          </p>

          <p
            style={{
              fontSize: 10,
              color: "white",
            }}
          >
            {rightTitle}
          </p>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    motionPosition: state.motionReducer.position,
  };
};

export default connect(mapStateToProps)(EventComps);
