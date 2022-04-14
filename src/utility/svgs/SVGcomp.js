import * as React from "react";

const SvgComponent = (props) => (
  <g
    data-id="motion_movesteps"
    className="blocklyDraggable"
    data-shapes="stack"
    data-category="motion"
  >
    <path
      className="blocklyPath blocklyBlockBackground"
      stroke="#3373CC"
      fill="#4C97FF"
      d="M12 68a4 4 0 0 1 4-4h8c2 0 3 1 4 2l4 4c1 1 2 2 4 2h12c2 0 3-1 4-2l4-4c1-1 2-2 4-2h97.389a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H60c-2 0-3 1-4 2l-4 4c-1 1-2 2-4 2H36c-2 0-3-1-4-2l-4-4c-1-1-2-2-4-2h-8a4 4 0 0 1-4-4z"
    />
    <g
      data-id="|B`K]SC9{y|`t0v^{z!0"
      data-argument-type="text number"
      data-shapes="argument round"
    >
      <path
        className="blocklyPath blocklyBlockBackground"
        stroke="#3373CC"
        fill="#FFF"
        d="M83.13 72h8a16 16 0 0 1 0 32h-8a16 16 0 0 1 0-32z"
      />
      <g
        className="blocklyEditableText"
        style={{
          cursor: "text",
        }}
      >
        <text
          className="blocklyText"
          x={12}
          y={18}
          dominantBaseline="middle"
          dy={0}
          textAnchor="middle"
          fill="#575E75"
          transform="translate(75.13 72)"
        >
          {"10"}
        </text>
      </g>
    </g>
    <text
      className="blocklyText"
      y={2}
      textAnchor="middle"
      dominantBaseline="middle"
      dy={0}
      x={19.565}
      transform="translate(20 88)"
      fill="#FFF"
    >
      {"move"}
    </text>
    <text
      className="blocklyText"
      y={2}
      textAnchor="middle"
      dominantBaseline="middle"
      dy={0}
      x={19.13}
      transform="translate(115.13 88)"
      fill="#FFF"
    >
      {"steps"}
    </text>
  </g>
);

export default SvgComponent;
