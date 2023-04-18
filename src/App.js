import ThemeProvider from "./theme";
import ThemeSettings from "./components/settings";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { loginSection } from "./redux/slices/authSlice";
import { connectSignalrAction } from "./redux/thunks/signalrThunk";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem("userInfo"));
    if (userAuth) {
      dispatch(loginSection(userAuth));
      dispatch(connectSignalrAction(userAuth.token));
    }
  }, [dispatch]);

  const { severity, message, open } = useSelector(
    (state) => state.home.snackbar
  );

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          <AppRouter />
        </ThemeSettings>
      </ThemeProvider>
      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}>
          <Alert severity={severity} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
