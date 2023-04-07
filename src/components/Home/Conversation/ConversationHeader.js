import React from "react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CaretDown, MagnifyingGlass, VideoCamera, Phone } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import StyledBadge from "../../../share/AvatarStyleBadge";
import { toggleSidebar } from "../../../redux/slices/homeSlice";
import AvatarStyleBadge from "../../../share/AvatarStyleBadge";

export default function ConversationHeader() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const conversation = useSelector((state) => state.signalr.conversation);

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0 0 2px rgba(0,0,0,0.25)",
      }}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "100%",
        }}>
        <Stack
          onClick={() => {
            dispatch(toggleSidebar());
          }}
          direction="row"
          spacing={2}>
          <Box>
            <AvatarStyleBadge isOnline={conversation.Online}>
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </AvatarStyleBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">{conversation.Title}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
