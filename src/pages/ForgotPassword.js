import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Quên mật khẩu?
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn và
          Chúng tôi sẽ gửi email bạn một liên kết để thiết lập lại mật khẩu của
          bạn.
        </Typography>
      </Stack>

      <ForgotPasswordForm />

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

export default ForgotPassword;
