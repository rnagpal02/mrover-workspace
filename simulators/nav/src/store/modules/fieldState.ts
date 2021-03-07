/* This file contains the state variables, getters, and mutators for the
   simulator field. */

import {
  ArTag,
  FieldState,
  Gate,
  Obstacle,
  Odom,
  Waypoint
} from '../../utils/types';


const state:FieldState = {
  arTags: [],
  canvasHeight: -1, /* initially invalid, will be set by the Field component */
  centerOdom: {
    latitude_deg: 38,
    latitude_min: 24.38,
    longitude_deg: -110,
    longitude_min: -47.51,
    bearing_deg: 0,
    speed: -1
  },
  gates: [],
  obstacles2: [],
  referencePoints: [],
  repeaterLoc: null,
  size: 25,
  waypoints: []
};


const getters = {
  arTags: (fieldState:FieldState):ArTag[] => fieldState.arTags,

  canvasHeight: (fieldState:FieldState):number => fieldState.canvasHeight,

  fieldCenterOdom: (fieldState:FieldState):Odom => fieldState.centerOdom,

  fieldSize: (fieldState:FieldState):number => fieldState.size,

  fldState: (fieldState:FieldState):FieldState => fieldState,

  gates: (fieldState:FieldState):Gate[] => fieldState.gates,

  obstacles: (fieldState:FieldState):Obstacle[] => fieldState.obstacles2,

  referencePoints: (fieldState:FieldState):Odom[] => fieldState.referencePoints,

  repeaterLoc: (fieldState:FieldState):Odom|null => fieldState.repeaterLoc,

  waypoints: (fieldState:FieldState):Waypoint[] => fieldState.waypoints
};


const mutations = {
  editArTag: (fieldState:FieldState, arTagEdit:[ArTag, number]):void => {
    console.log('edit ar tag');
    const [updatedArTag, index]:[ArTag, number] = arTagEdit;
    Object.assign(fieldState.arTags[index], updatedArTag);

    /* Note that `fieldState.arTags[index] = updatedArTag` will not work.
       For more information this, read more about why to use Object.assign() vs.
       the assignment operator in JavaScript. */
  },

  editGate: (fieldState:FieldState, gateEdit:[Gate, number]):void => {
    const [updatedGate, index]:[Gate, number] = gateEdit;
    Object.assign(fieldState.gates[index], updatedGate);

    /* Note that `fieldState.gates[index] = updatedGate` will not work.
       For more information this, read more about why to use Object.assign() vs.
       the assignment operator in JavaScript. */
  },

  editObstacle: (fieldState:FieldState, obstacleEdit:[Obstacle, number]):void => {
    const [updatedObstacle, index]:[Obstacle, number] = obstacleEdit;
    Object.assign(fieldState.obstacles2[index], updatedObstacle);

    /* Note that `fieldState.obstacles[index] = updatedObstacle` will not work.
       For more information this, read more about why to use Object.assign() vs.
       the assignment operator in JavaScript. */
  },

  editWaypoint: (fieldState:FieldState, waypointEdit:[Waypoint, number]):void => {
    const [updatedWaypoint, index]:[Waypoint, number] = waypointEdit;
    Object.assign(fieldState.waypoints[index], updatedWaypoint);

    /* Note that `fieldState.waypoints[index] = updatedWaypoint` will not work.
       For more information this, read more about why to use Object.assign() vs.
       the assignment operator in JavaScript. */
  },

  pushArTag: (fieldState:FieldState, newArTag:ArTag):void => {
    console.log('push ar tag');
    fieldState.arTags.push(newArTag);
  },

  pushGate: (fieldState:FieldState, newGate:Gate):void => {
    fieldState.gates.push(newGate);
  },

  pushObstacle: (fieldState:FieldState, newObstacle:Obstacle):void => {
    fieldState.obstacles2.push(newObstacle);
  },

  pushReferencePoint: (fieldState:FieldState, newReferencePoint:Odom):void => {
    fieldState.referencePoints.push(newReferencePoint);
  },

  pushWaypoint: (fieldState:FieldState, newWaypoint:Waypoint):void => {
    fieldState.waypoints.push(newWaypoint);
  },

  removeArTag: (fieldState:FieldState, index:number):void => {
    fieldState.arTags.splice(index, 1);
  },

  removeGate: (fieldState:FieldState, index:number):void => {
    fieldState.gates.splice(index, 1);
  },

  removeObstacle: (fieldState:FieldState, index:number):void => {
    fieldState.obstacles2.splice(index, 1);
  },

  removeReferencePoint: (fieldState:FieldState, index:number):void => {
    fieldState.referencePoints.splice(index, 1);
  },

  removeWaypoint: (fieldState:FieldState, index:number):void => {
    fieldState.waypoints.splice(index, 1);
  },

  setArTag: (fieldState:FieldState, newArTags:ArTag[]):void => {
    fieldState.arTags = newArTags;
  },

  setFieldCenter: (fieldState:FieldState, newFieldCenter:Odom):void => {
    Object.assign(fieldState.centerOdom, newFieldCenter);
  },

  setFieldSize: (fieldState:FieldState, newFieldSize:number):void => {
    fieldState.size = newFieldSize;
  },

  setFieldState: (fieldState:FieldState, newState:FieldState):void => {
    fieldState.arTags = newState.arTags;
    Object.assign(fieldState.centerOdom, newState.centerOdom);
    fieldState.gates = newState.gates;
    fieldState.obstacles2 = newState.obstacles2;
    fieldState.repeaterLoc = newState.repeaterLoc;
    fieldState.size = newState.size;
    fieldState.waypoints = newState.waypoints;

    /* intentionally skipped canvasHeight */
  },

  setGates: (fieldState:FieldState, newGates:Gate[]):void => {
    fieldState.gates = newGates;
  },

  setObstacles: (fieldState:FieldState, newObstacles:Obstacle[]):void => {
    fieldState.obstacles2 = newObstacles;
  },

  setRepeaterLoc: (fieldState:FieldState, newRepeaterLoc:Odom|null):void => {
    fieldState.repeaterLoc = newRepeaterLoc;
  },

  setWaypoints: (fieldState:FieldState, newWaypoints:Waypoint[]):void => {
    fieldState.waypoints = newWaypoints;
  },

  updateCanvasHeight: (fieldState:FieldState, newCanvasHeight:number):void => {
    fieldState.canvasHeight = newCanvasHeight;
  }
};

export default {
  state,
  getters,
  mutations
};
