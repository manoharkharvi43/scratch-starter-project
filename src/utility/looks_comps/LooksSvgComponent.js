import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
  actionType,
  isSelectRequired,
  options,
  looksAction,
  value,
}) {
  const [message, setMessage] = useState(value ? value : "hello");
  const [inputValue, setInputValue] = useState("1");
  const [visible, setVisible] = useState(false);
  const [costume, setCostume] = useState(looksAction.costume);

  function dragStart(ev) {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
  }

  useEffect(() => {
    setCostume(looksAction.costume);
  }, [looksAction.costume]);

  return (
    <>
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
          if (isSelectRequired) {
            onClick("", "", costume);
          } else if (inputCount === 1) onClick(message);
          else onClick(message, inputValue, costume);
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
              setCostume(e.target.value);
            }}
            value={costume}
            style={{
              backgroundColor: "#855CD6",
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

const mapStateToProps = (state) => {
  return {
    looksAction: state.lookReducer.currentLookAction,
  };
};
export default connect(mapStateToProps)(LooksSvgComps);
