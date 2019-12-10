import axios from "axios";

//Tip: In general action generator returns object but this function thing is possible because of redux thunk.
export const fetchAppDetails = () => {
  return function(dispatch) {
    let theme;
    axios
      .get("/api/faculty_profile/profile/")
      .then(response => {
        theme = response.data[0].theme;
        dispatch(setAppDetails(true, "blue", undefined));
      })
      .catch(error => {
        console.error(error);
        if (error.response.status == 401) {
          document.location = "/auth/login?next=/faculty_profile";
        }
      });
  } 
};

export const setAppDetails = (editMode, theme, handle) => {
  return {
    type: "SET_APP_DETAILS",
    editMode: editMode,
    theme: theme,
    handle: handle,
    loading: false
  };
};

export const setTheme = theme => {
  return {
    type: "SET_THEME",
    theme: theme
  };
};
