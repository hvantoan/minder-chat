import * as Yup from "yup";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// components
import FormProvider, { RHFTextField } from "../../hook-form";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const ResetPasswordSchema = Yup.object().shape({
  username: Yup.string()
    .required("Dữ liệu Là bắt buộc")
    .email("Địa chỉ email không đúng định dạng"),
});

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { username: "toan01473@gmail.com" },
    onSubmit: (values) => {
      dispatch();
    },
  });
  const { onSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField name="username" label="Địa chỉ Email" />

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}>
        Gửi
      </Button>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
