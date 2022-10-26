import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";

function MotionComps({
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
  const [onDragStart, setOnDragStart] = useState(false);

  function dragStart(ev) {
    setOnDragStart(true);
    ev.dataTransfer.effectAllowed = "all";
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));

    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
  }

  useEffect(() => {
    setXAxis(motionPosition.x);
    setYAxis(motionPosition.y);
  }, [motionPosition]);

  return (
    // <Draggable>
    <div>
      <div
        style={{
          minWidth: 120,
          height: 30,
          padding: "10px",
          cursor: "grab",
          maxWidth: 200,
          ...styles,
        }}
        draggable={true}
        className="flex flex-row items-center  justify-between"
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
              backgroundColor: "#4280D7",
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

        {xAxisRequired && (
          <input
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: "20%",
              border: "1px solid dodgerblue",
              margin: "0px 3px 0px 3px",
              // position: "absolute",
              zIndex: 10,
              top: 2,
              right: 40,
              fontSize: 10,
              outline: "none",
            }}
            type="number"
            value={xAxis}
            onChange={(e) => {
              setInputValue1(e.target.value);
              setXAxis(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="input-1"
          />
        )}

        {(inputCount === 1 || inputCount === 2) && (
          <input
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: "20%",
              border: "1px solid dodgerblue",
              margin: "0px 3px 0px 3px",
              // position: "absolute",
              zIndex: 10,
              top: 2,
              right: 40,
              fontSize: 10,
              outline: "none",
            }}
            type="number"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="input-1"
          />
        )}
        <p
          style={{
            fontSize: 10,
            color: "white",
          }}
        >
          {rightTitle}
        </p>

        {yAxisRequired && (
          <input
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: "20%",
              border: "1px solid dodgerblue",
              margin: "0px 3px 0px 3px",
              // position: "absolute",
              zIndex: 10,
              top: 2,
              right: 40,
              fontSize: 10,
              outline: "none",
            }}
            type="number"
            value={yAxis}
            onChange={(e) => {
              if (xAxisRequired) {
                setInputValue2(e.target.value);
              } else setInputValue2(e.target.value);
              setYAxis(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="input-1"
          />
        )}

        {inputCount === 2 && (
          <input
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: "20%",
              border: "1px solid dodgerblue",
              margin: "0px 3px 0px 3px",
              // position: "absolute",
              zIndex: 10,
              top: 2,
              right: 40,
              fontSize: 10,
              outline: "none",
            }}
            value={inputValue2}
            defaultValue="10"
            onChange={(e) => setInputValue2(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="input-2"
          />
        )}
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

          {(inputCount === 1 || inputCount === 2) && (
            <input
              style={{
                width: 20,
                height: 20,
                backgroundColor: "white",
                borderRadius: "20%",
                border: "1px solid dodgerblue",
                margin: "0px 3px 0px 3px",
                // position: "absolute",
                zIndex: 10,
                top: 2,
                right: 40,
                fontSize: 10,
                outline: "none",
              }}
              type="number"
              value={inputValue1}
              onChange={(e) => setInputValue1(e.target.value)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          )}
          <p
            style={{
              fontSize: 10,
              color: "white",
            }}
          >
            {rightTitle}
          </p>

          {inputCount === 2 && (
            <input
              style={{
                width: 20,
                height: 20,
                backgroundColor: "white",
                borderRadius: "20%",
                border: "1px solid dodgerblue",
                margin: "0px 3px 0px 3px",
                // position: "absolute",
                zIndex: 10,
                top: 2,
                right: 40,
                fontSize: 10,
                outline: "none",
              }}
              value={inputValue2}
              defaultValue="10"
              onChange={(e) => setInputValue2(e.target.value)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          )}
        </div>
      )}
      {/* </Draggable> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    motionPosition: state.motionReducer.position,
  };
};

export default connect(mapStateToProps)(MotionComps);
