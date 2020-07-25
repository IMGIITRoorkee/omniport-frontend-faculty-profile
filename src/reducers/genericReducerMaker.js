import { initial } from "../constants/initial";

export const genericReducerMaker = componentName => {
  const initialState = {
    update: false,
    active: false,
    loading: true,
    isEmpty: true,
    data: [],
    formData: initial[componentName].formData,
    affordances: []
  };

  const genericReducer = (state = initialState, action) => {
    switch (action.type) {
      //adding the response of first GET request to the state to get the initial list of items
      case "FETCH_DATA" + "--" + componentName:
        return {
          ...state,
          data: action.responseData,
          isEmpty: action.isEmpty,
          loading: action.loading
        };

      case "FETCH_AFFORDANCES" + "--" + componentName:
        return { ...state, affordances: action.affordances };

      case "MANAGE_DATA" + "--" + componentName:
        return {
          ...state,
          formData: action.formData,
          update: action.update,
          active: action.active
        };

      case "APPEND_DATA" + "--" + componentName:
        return { ...state, data: action.newData };

      case "UPDATE_DELETE_DATA" + "--" + componentName:
        return { ...state, data: action.newData };

      case "HANDLE_SHOW" + "--" + componentName:
        return {
          ...state,
          active: action.active,
          formData: action.formData,
          update: action.update
        };

      case "HANDLE_HIDE" + "--" + componentName:
        return { ...state, active: action.active, update: action.update };

      case "HANDLE_DRAG_SHOW" + "--" + componentName:
        return { ...state, rearrange: action.rearrange };

      case "HANDLE_DRAG_HIDE" + "--" + componentName:
        return { ...state, rearrange: action.rearrange };

      case "HANDLE_UPDATE" + "--" + componentName:
        return { ...state, data: action.newData, rearrange: action.rearrange };

      case "HANDLE_CSV_SHOW" + "--" + componentName:
        return { ...state, csv: action.csv };

      case "HANDLE_CSV_HIDE" + "--" + componentName:
        return { ...state, csv: action.csv };

      default:
        return state;
    }
  };
  return genericReducer;
};
