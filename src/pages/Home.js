import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Contact from "../components/Home/Contact";
import SharedMessages from "../components/Home/SharedMessages";
import StarredMessages from "../components/Home/StarredMessages";
import Chats from "../components/Home/Chats";
import Conversation from "../components/Home/Conversation";

export default function Home() {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}>
        <Conversation />
      </Box>
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;
            default:
              break;
          }
        })()}
    </Stack>
  );
}
