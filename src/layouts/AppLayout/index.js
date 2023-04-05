import { Container, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";

const AppLayout = () => {
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) navigate("/app");

  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
            <img style={{ height: 120, width: 120 }} src={Logo} alt=""></img>
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
