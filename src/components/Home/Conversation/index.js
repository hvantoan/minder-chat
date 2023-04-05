import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationFooter from "./ConversationFooter";
import Message from "./Message";

export default function Conversation() {
  const theme = useTheme();
  return (
    <>
      <Stack height="100%" maxHeight="100vh" width="auto">
        <ConversationHeader />
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
            overflow: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
          }}>
          <Message menu={true} />
        </Box>
        <ConversationFooter />
      </Stack>
    </>
  );
}
