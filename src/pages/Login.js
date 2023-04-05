import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import AuthSocial from "../components/AuthSocial";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Đăng nhập</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Người dùng mới</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Tạo tài khoản
          </Link>
        </Stack>
        <LoginForm />
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
