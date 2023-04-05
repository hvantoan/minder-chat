import React from "react";
import { useState } from "react";
import FormProvider, { RHFTextField } from "../../hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Stack, InputAdornment, IconButton, Link } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { loginUserAction } from "../../redux/thunks/authThunk";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Dữ liệu là bắt buộc")
    .email("Email không đúng định dạng"),
  password: Yup.string().required("Dữ liệu là bắt buộc"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState();
  const { loading, appError, serverError } = useSelector((state) => state.auth);

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      username: "toan01473@gmail.com",
      password: "12345678",
    },
  });

  const onSubmit = (values) => {
    console.log(values);

    dispatch(loginUserAction(values));
  };
  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {appError || serverError ? (
          <Alert severity="error">{serverError}</Alert>
        ) : null}
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
      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link
          to="/auth/reset-password"
          component={RouterLink}
          variant="body2"
          color="inherit"
          underline="always">
          Quên mật khẩu?
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        color="inherit"
        size="lager"
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
        Đăng nhập
      </LoadingButton>
    </FormProvider>
  );
}
