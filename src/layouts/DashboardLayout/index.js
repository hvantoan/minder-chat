import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function DashboardLayout() {
  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
}
