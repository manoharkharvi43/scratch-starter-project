import { globalEventAction } from "../redux/actions/globalEventAction";
import { leftRotateAction } from "../redux/actions/motion_actions/leftRotateAction";
import { moveXandYAction } from "../redux/actions/motion_actions/moveXandYAction";
import { rightRotateAction } from "../redux/actions/motion_actions/rightRotateAction";
import { setXandYAction } from "../redux/actions/motion_actions/setXandYAction";

export const Motion_List = [
  {
    leftTitle: "move",
    rightTitle: "steps",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    input1Action: "15deg",
    action: globalEventAction,
  },
  {
    leftTitle: "turn right",
    rightTitle: "degrees",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    input1Action: "15deg",
    action: rightRotateAction,
  },
  {
    leftTitle: "turn left",
    rightTitle: "degrees",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: leftRotateAction,
  },
  {
    leftTitle: "go to x:",
    rightTitle: "y:",
    isInputRequired: true,
    input: "number",
    inputCount: 2,
    action: moveXandYAction,
  },
  {
    leftTitle: "set to x:",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: setXandYAction,
    key: "setToX",
  },
  {
    leftTitle: "set to y:",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: setXandYAction,
    key: "setToY",
  },
];

export const Looks_List = [
  {
    leftTitle: "say",
    rightTitle: "for",
    isInputRequired: true,
    input: "number",
    inputCount: 2,
    input1Action: "15deg",
    lastTitle: "Seconds",
    type: "message",
    action: "",
  },
  {
    leftTitle: "say",
    // rightTitle: "degrees",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
    type: "message",
    action: "",
  },
  {
    leftTitle: "think",
    rightTitle: "for",
    isInputRequired: true,
    input: "text",
    inputCount: 2,
    type: "think",
    action: "",
  },
  {
    leftTitle: "think",
    // rightTitle: "degrees",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
    type: "think",
    action: "",
  },
  {
    leftTitle: "show",
    rightTitle: "",
    isInputRequired: false,
    action: "show",
  },
  {
    leftTitle: "hide",
    rightTitle: "",
    isInputRequired: false,
    action: "hide",
  },
];
