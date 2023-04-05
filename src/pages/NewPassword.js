import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../components/NewPassword/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Đặt lại mật khẩu
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Vui lòng nhập mật khẩu mới
        </Typography>
      </Stack>
      <NewPasswordForm />
      <Link
        component={RouterLink}
        to={"/auth/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}>
        <CaretLeft size={24} />
        Trở về đăng nhập
      </Link>
    </>
  );
};

export default NewPassword;
