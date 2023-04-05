import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: { open: undefined, message: undefined, severity: undefined },
  sidebar: { open: false, type: "CONTACT" },
  tab: 0,
};

const appSlices = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    //Sidebar
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    //Snackbar
    openSnackbar(state, action) {
      console.log(action.payload);
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackbar(state) {
      state.snackbar.open = false;
      state.snackbar.message = null;
    },
  },
});

export const selectApp = (state) => state?.app;
export const { toggleSidebar, updateSidebarType } = appSlices.actions;
export default appSlices.reducer;

// Snackbar Actions

export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(appSlices.actions.closeSnackbar());
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      appSlices.actions.openSnackbar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(appSlices.actions.closeSnackbar());
    }, 4000);
  };
