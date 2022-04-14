import React, { useState } from "react";
import Draggable from "react-draggable";
import { LOOKS_COLOR } from "../colorConstants";
import "./index.css";
function LooksSvgComps({
  styles,
  leftTitle,
  rightTitle,
  inputCount,
  onClick,
  lastTitle,
}) {
  const [message, setMessage] = useState("10");
  const [inputValue, setInputValue] = useState("1");

  return (
    <Draggable>
      <div
        style={{
          minWidth: 60,
          height: 30,
          padding: "0px 5px 0px 5px",
          cursor: "grab",
          backgroundColor: LOOKS_COLOR,
          ...styles,
        }}
        className="flex flex-row items-center  justify-between mb-2 "
        onClick={() => {
          if (inputCount === 1) onClick(message);
          else onClick(message, inputValue);
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
              zIndex: 10,
              top: 2,
              right: 40,
              fontSize: 10,
              outline: "none",
            }}
            value={inputValue}
            defaultValue="10"
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
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
          {lastTitle}
        </p>
      </div>
    </Draggable>
  );
}

export default LooksSvgComps;
