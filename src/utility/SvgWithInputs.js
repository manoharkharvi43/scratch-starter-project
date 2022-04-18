import React, { useState } from "react";
import SvgBlocks from "./svgs/SvgBlocks";

function SvgWithInputs({ onClick, leftTitle, rightTitle, width }) {
  const [inputValue, setInputValue] = useState(10);
  const handleStart = () => {};
  const handleDrag = () => {};
  const handleStop = () => {};

  function dragStart(ev) {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
  }

  return (
    // <Draggable>
    <div
      style={{
        position: "relative",
        cursor: "grab",
        transform: "none !important",
        display: "flex",
        alignItems: "center",
        maxWidth: 150,
      }}
      onClick={() => {
        if (inputValue !== "") onClick(inputValue);
      }}
      draggable={true}
      id={leftTitle + rightTitle + "1"}
      onDragStart={(e) => dragStart(e)}
      omDragOver={() => {}}
    >
      <p
        style={{
          position: "absolute",
          color: "white",
          fontSize: 10,
          textAlign: "center",
          top: 5,
          left: 2,
        }}
      >
        {leftTitle}
      </p>
      <SvgBlocks width={width} />
      <input
        style={{
          width: 20,
          height: 20,
          backgroundColor: "white",
          borderRadius: "20%",
          border: "1px solid dodgerblue",
          position: "absolute",
          zIndex: 10,
          top: 2,
          right: 40,
          fontSize: 10,
          outline: "none",
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p
        style={{
          position: "absolute",
          color: "white",
          fontSize: 10,
          textAlign: "center",
          top: 5,
          right: 10,
          marginRight: 1,
        }}
      >
        {rightTitle}
      </p>
    </div>
    // </Draggable>
  );
}

export default SvgWithInputs;
