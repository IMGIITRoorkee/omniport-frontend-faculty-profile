const initialState = {
  editMode: false,
  loading: true,
  theme: "blue",
  handle: undefined
};

export const appDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP_DETAILS":
      return {
        editMode: action.editMode,
        theme: action.theme,
        handle: action.handle,
        loading: action.loading
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.theme
      };

    default:
      return state;
  }
};
