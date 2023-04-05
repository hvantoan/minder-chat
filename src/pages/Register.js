import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import RegisterForm from "../components/Register/RegisterForm";
import AuthSocial from "../components/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Đăng ký</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography>Bạn đã có tài khoản?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="subtitle2">
            Đăng nhập
          </Link>
        </Stack>
        <RegisterForm />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}>
          {"Đăng ký bằng cách đồng ý với "}
          <Link underline="always" color="text.primary">
            Điều khoản dịch vụ
          </Link>
          {" và "}
          <Link underline="always" color="text.primary">
            Chính sách
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
