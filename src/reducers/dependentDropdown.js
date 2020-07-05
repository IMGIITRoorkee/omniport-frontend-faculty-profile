import { uniq } from "lodash";

function dependentDropdownData(state = {}, action) {
  switch (action.type) {
    case "HANDLE_PARENT_DROPDOWN":
      if (state[action.componentName]) {
        const index = state[action.componentName].findIndex(
          (attr) => attr.field === action.dropdownName
        );
        if (index !== -1) {
          const current = state[action.componentName];
          current.splice(index, 1, {
            field: action.dropdownName,
            option: action.value,
          });
          return {
            ...state,
            [action.componentName]: current,
          };
        } else {
          return {
            ...state,
            [action.componentName]: uniq([
              ...state[action.componentName],
              { field: action.dropdownName, option: action.value },
            ]),
          };
        }
      } else {
        return {
          ...state,
          [action.componentName]: [
            { field: action.dropdownName, option: action.value },
          ],
        };
      }
    default:
      return state;
  }
}

export { dependentDropdownData };
