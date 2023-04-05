import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import VerifyForm from "../components/Verify/VerifyForm";

// ----------------------------------------------------------------------

export default function Verify() {
  const username = useSelector((state) => state.auth.username);
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Vui lòng xác nhận OTP</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Đã gửi đến ({username})</Typography>
        </Stack>
      </Stack>
      <VerifyForm />
    </>
  );
}
