import * as React from "react";
import "./SvgBlock.css";
const SvgBlocks = ({ width = 160, height = 70, svgWidth = "100%" }) => (
  <svg
    width={svgWidth}
    height="40px"
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{}}
  >
    <path
      class="blocklyPath blocklyBlockBackground"
      stroke="#3373CC"
      fill="#4C97FF"
      fill-opacity="1"
      d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 145.38888931274414 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"
    ></path>
  </svg>
);

export default SvgBlocks;
