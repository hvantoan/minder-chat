import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { useTheme } from "@mui/material";
import { Search, StyledInputBase, SearchIconWrapper } from "../../share/Search";
import ChatElement from "./ChatElement";
import { useSelector } from "react-redux";

export default function Chats() {
  const theme = useTheme();
  const { conversations } = useSelector((state) => state.signalr);
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}>
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          alignItems={"center"}
          justifyContent="space-between"
          direction="row">
          <Typography variant="h5">Chats</Typography>

          <Stack direction={"row"} alignItems="center" spacing={1}>
            <IconButton sx={{ width: "max-content" }}></IconButton>
            <IconButton sx={{ width: "max-content" }}>
              <CircleDashed />
            </IconButton>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1.5} alignItems="center">
            <ArchiveBox size={24} />
            <Button variant="text">Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          sx={{
            flexGrow: 1,
            overflow: "scroll",
            height: "100%",
            "&::-webkit-scrollbar": { display: "none" },
          }}>
          <Stack spacing={2.4}>
            {conversations.map((el, idx) => {
              return <ChatElement key={idx} item={el} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
