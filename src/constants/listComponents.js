import genericListMaker from "../components/genericListMaker";
import genericFormMaker from "../components/genericFormMaker";
import { components } from "./genericComponents";
import { specs } from "./specs";

const list = {};
for (let key in components) { 
  let component = components[key]
  for (let index in component) {
    let componentName = component[index];
    let formComponent = genericFormMaker(specs[componentName]);
    list[componentName] = genericListMaker(componentName, formComponent);
  }
} 
export const listComponents = list;
