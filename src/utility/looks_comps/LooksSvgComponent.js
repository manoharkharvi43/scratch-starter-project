import React, { useState } from "react";
import { LOOKS_COLOR } from "../colorConstants";
import "./index.css";
function LooksSvgComps({
  styles,
  leftTitle,
  rightTitle,
  inputCount,
  onClick,
  lastTitle,
  id,
}) {
  const [message, setMessage] = useState("hello");
  const [inputValue, setInputValue] = useState("1");
  const [visible, setVisible] = useState(false);

  function dragStart(ev) {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
  }

  return (
    <>
      {/* <Draggable
        onStart={(e) => {
          setVisible(true);
        }}
        onStop={() => {
          setVisible(false);
        }}
      > */}
      <div
        draggable={true}
        style={{
          minWidth: 60,
          height: 30,
          padding: "0px 5px 0px 5px",
          cursor: "grab",
          maxWidth: 150,
          backgroundColor: LOOKS_COLOR,
          ...styles,
        }}
        className="flex flex-row items-center  justify-between mb-2 "
        onClick={() => {
          if (inputCount === 1) onClick(message);
          else onClick(message, inputValue);
        }}
        onDragStart={(e) => dragStart(e)}
        omDragOver={() => {
          setVisible(true);
        }}
        id={`drag-element-${id}`}
        key={`${id}`}
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
              width: 30,
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
            onDragStart={(e) => dragStart(e)}
            className="input-2"
            // id={`drag-element-${id}`}

            draggable={true}
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
      {/* </Draggable> */}
    </>
  );
}

export default LooksSvgComps;
