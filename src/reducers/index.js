import { combineReducers } from "redux";

import { genericReducerMaker } from "./genericReducerMaker";
import { appDetailsReducer } from "./appDetails";
import { dependentDropdownData } from './dependentDropdown'
import { components } from "../constants/genericComponents";

let reducerMap = {};
reducerMap["appDetails"] = appDetailsReducer;
reducerMap["dependentDropdownData"] = dependentDropdownData;
for (let key in components) { 
  let component = components[key]
  for (let index in component) {
    let componentName = component[index];
    reducerMap[componentName] = genericReducerMaker(componentName);
  }
} 
export default combineReducers(reducerMap);
