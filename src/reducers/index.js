import { combineReducers } from "redux";

import { genericReducerMaker } from "./genericReducerMaker";
import { appDetailsReducer } from "./appDetails";
import { dependentDropdownData } from './dependentDropdown'
import { components } from "../constants/genericComponents";

let reducerMap = {};
reducerMap["appDetails"] = appDetailsReducer;
reducerMap["dependentDropdownData"] = dependentDropdownData;
for (let index in components) {
  let componentName = components[index];
  reducerMap[componentName] = genericReducerMaker(componentName);
}

export default combineReducers(reducerMap);
