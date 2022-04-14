import { leftRotateAction } from "../redux/actions/motion_actions/leftRotateAction";
import { rightRotateAction } from "../redux/actions/motion_actions/rightRotateAction";

export const Motion_List = [
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
    // action: rightRotateAction,
  },
  {
    leftTitle: "say",
    // rightTitle: "degrees",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
    // action: leftRotateAction,
  },
  {
    leftTitle: "think",
    rightTitle: "for",
    isInputRequired: true,
    input: "text",
    inputCount: 2,
  },
  {
    leftTitle: "think",
    rightTitle: "",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
  },
];
