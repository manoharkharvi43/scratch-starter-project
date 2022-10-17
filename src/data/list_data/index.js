import { globalEventAction } from "../redux/actions/globalEventAction";
import { leftRotateAction } from "../redux/actions/motion_actions/leftRotateAction";
import { moveToRandomPosition } from "../redux/actions/motion_actions/moveToRandomPositon";
import { moveXandYAction } from "../redux/actions/motion_actions/moveXandYAction";
import { rightRotateAction } from "../redux/actions/motion_actions/rightRotateAction";
import { setXandYAction } from "../redux/actions/motion_actions/setXandYAction";

const goToRandomOptions = [
  {
    label: "random position",
    value: "randomPosition",
  },
  {
    label: "mouse-pointer",
    value: "mousePointer",
  },
];

const changeCostume = [
  {
    label: "costume1",
    value: 1,
  },
  {
    label: "costume2",
    value: 2,
  },
];

const keyPresent = [
  {
    label: "space",
    value: 1,
  },
  {
    label: "enter",
    value: 2,
  },
  {
    label: "a",
    value: 1,
  },
  {
    label: "b",
    value: 2,
  },
];

export const Motion_List = [
  {
    leftTitle: "move",
    rightTitle: "steps",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    input1Action: "15deg",
    action: globalEventAction,
    id: "moveForward",
    actionType: "motion",
    key: "moveForward",
  },
  {
    leftTitle: "turn right",
    rightTitle: "degrees",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    input1Action: "15deg",
    action: rightRotateAction,
    id: "turnRight",
    key: "turnRight",
    actionType: "motion",
  },
  {
    leftTitle: "turn left",
    rightTitle: "degrees",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: leftRotateAction,
    id: "turnLeft",
    key: "turnLeft",
    actionType: "motion",
  },
  {
    leftTitle: "go to",
    isSelectRequired: true,
    option: goToRandomOptions,
    action: moveXandYAction,
    id: "goToRandomPosition",
    key: "goToRandomPosition",
    actionType: "motion",
  },
  {
    leftTitle: "go to x:",
    rightTitle: "y:",
    xAxisRequired: true,
    yAxisRequired: true,
    input: "number",
    action: moveXandYAction,
    id: "goToXAndY",
    key: "goToXAndY",
    actionType: "motion",
  },
  {
    leftTitle: "glide",
    isSelectRequired: true,
    option: goToRandomOptions,
    action: moveXandYAction,
    id: "glideToRandomPosition",
    key: "goToRandomPosition",
    actionType: "motion",
    glide: true,
  },
  {
    leftTitle: "glide to x:",
    rightTitle: "y:",
    xAxisRequired: true,
    yAxisRequired: true,
    input: "number",
    action: moveXandYAction,
    key: "goToXAndY",
    id: "glideToXAndY",
    actionType: "motion",
    glide: true,
  },
  {
    leftTitle: "set to x:",
    input: "number",
    xAxisRequired: true,
    action: setXandYAction,
    key: "setToX",
    id: "setToX",
    actionType: "motion",
  },
  {
    leftTitle: "change x by:",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: setXandYAction,
    key: "changeX",
    id: "changeX",
    actionType: "motion",
  },
  {
    leftTitle: "set to y:",
    yAxisRequired: true,
    input: "number",
    action: setXandYAction,
    key: "setToY",
    id: "setToY",
    actionType: "motion",
  },
  {
    leftTitle: "change y by:",
    isInputRequired: true,
    input: "number",
    inputCount: 1,
    action: setXandYAction,
    key: "changeY",
    id: "changeY",
    actionType: "motion",
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
    id: "sayMessageForXTime",
    actionType: "look",
  },
  {
    leftTitle: "say",
    // rightTitle: "degrees",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
    type: "message",
    action: "",
    id: "sayMessage",
    actionType: "look",
  },
  {
    leftTitle: "think",
    rightTitle: "for",
    isInputRequired: true,
    input: "text",
    inputCount: 2,
    type: "think",
    action: "",
    id: "thinkMessageForXTime",
    actionType: "look",
  },
  {
    leftTitle: "think",
    // rightTitle: "degrees",
    isInputRequired: true,
    input: "text",
    inputCount: 1,
    type: "think",
    action: "",
    id: "thinkMessage",
    actionType: "look",
  },

  {
    leftTitle: "switch costume to",
    isSelectRequired: true,
    input: "text",
    type: "think",
    action: "",
    id: "switchCostume",
    key: "switchCostume",
    actionType: "look",
    options: changeCostume,
  },
  {
    leftTitle: "next costume",
    input: "text",
    type: "",
    id: "nextCostume",
    key: "nextCostume",
    actionType: "look",
    action: "",
    options: changeCostume,
  },

  {
    leftTitle: "change size by",
    isInputRequired1: true,
    input: "text",
    inputCount: 1,
    value: 1,
    type: "",
    action: "",
    key: "changeSize",
    id: "changeSize",
    actionType: "look",
  },
  {
    leftTitle: "set size by",
    isInputRequired1: true,
    input: "text",
    inputCount: 1,
    value: 100,
    type: "message",
    action: "",
    key: "setSize",
    lastTitle: "%",
    id: "setSize",
    actionType: "look",
  },
  {
    leftTitle: "show",
    rightTitle: "",
    isInputRequired: false,
    action: "show",
    id: "showMessage",
    actionType: "look",
  },
  {
    leftTitle: "hide",
    rightTitle: "",
    isInputRequired: false,
    action: "hide",
    id: "hideMessage",
    actionType: "look",
  },
];

export const Events_List = [
  {
    leftTitle: "when flag clicked",
    actionType: "look",
    id: "whenFlagClicked",
  },
  {
    leftTitle: "when",
    isSelectRequired: true,
    option: keyPresent,
    rightTitle: "key pressed",
    id: "whenKeyPressed",
  },

  {
    leftTitle: "when sprited clicked",
    actionType: "look",
    id: "whenSpritedClicked",
  },
  {
    leftTitle: "when backdrop switches to",
    actionType: "look",
    id: "whenBackdropSwitchesTo",
  },
];
