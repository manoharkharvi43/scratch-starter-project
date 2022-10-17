import React, { useState } from "react";

function MotionComps({
  styles,
  leftTitle,
  rightTitle,
  inputCount,
  onClick,
  id,
  action,
  actionType,
}) {
  const [inputValue1, setInputValue1] = useState("10");
  const [inputValue2, setInputValue2] = useState("10");
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
          maxWidth: 150,
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
    </>
  );
}

export default MotionComps;
