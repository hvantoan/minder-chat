import React from "react";
import { useState } from "react";
import FormProvider, { RHFTextField } from "../../hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Stack, InputAdornment, IconButton } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Dữ liệu là bắt buộc"),
  phone: Yup.string().required("Dữ liệu là bắt buộc"),
  username: Yup.string()
    .required("Dữ liệu là bắt buộc")
    .email("Email không đúng định dạng"),
  password: Yup.string().required("Dữ liệu là bắt buộc"),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState();
  const { loading, appError, serverError } = useSelector((state) => state.auth);

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      name: "Chat User Test",
      phone: "0336516906",
      username: "it.vantoan@gmail.com",
      password: "12345678",
    },
  });

  const { onSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} mb={4}>
        {appError || serverError ? (
          <Alert severity="error">{serverError}</Alert>
        ) : null}
        <RHFTextField name="name" label="Họ và Tên" />
        <RHFTextField name="phone" label="Số điện thoại" />
        <RHFTextField name="username" label="Địa chỉ Email" />
        <RHFTextField
          name="password"
          label="Mật khẩu"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end">
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}>
        Tạo tài khoản
      </LoadingButton>
    </FormProvider>
  );
};

export default RegisterForm;
