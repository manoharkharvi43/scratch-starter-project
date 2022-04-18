import React, { useEffect, useRef, useState } from "react";

export default function MidArea() {
  const ref = useRef();
  const [data, setData] = useState("");
  const getAllDraggedItemAndDispatch = (e) => {
    const div = document.getElementById("drag-div").children;
    div[0].addEventListener("click", (e) => {
      console.log("event", div[0].getElementsByClassName("input-1"));
    });
    div[0].addEventListener("onChange", (e) => {
      let iDiv = div[0].getElementsByTagName("input");
      console.log("event", iDiv, "valll", iDiv);
    });
    console.log(div, "div  =>");
  };
  return (
    <div
      className="flex-1 h-full overflow-auto w-full"
      ref={ref}
      onDragEnter={(e) => {
        e.preventDefault();
        console.log(e, "eeeee=>");
        return true;
      }}
      onDrop={(ev) => {
        var src = ev.dataTransfer.getData("Text");
        var nodeCopy = document.getElementById(src).cloneNode(true);
        ev.target.appendChild(nodeCopy);
        getAllDraggedItemAndDispatch(ev);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        return false;
      }}
      id="drag-div"
      style={{}}
    ></div>
  );
}
